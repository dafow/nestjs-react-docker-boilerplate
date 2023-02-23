import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    private readonly PASSWORD_SALT_ROUND = 10;

    constructor(private usersService: UsersService) { }

    async validateUser(email: string, password: string): Promise<any> {

        console.log('ok');
        const users = await this.usersService.find({
            where: {
                email
            }
        });

        if (users.length !== 1) {
            return false;
        }

        const user = users[0];
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (isValidPassword) {
            const { password, ...result } = user;
            return result;
        }

        return false;
    }

    async createUser(email: string, passwordInput: string, name: string): Promise<any> {
        const hashedPassword = await bcrypt.hash(passwordInput, this.PASSWORD_SALT_ROUND);
        if (!hashedPassword) {
            throw new BadRequestException();
        }

        const user = await this.usersService.create({
            email,
            password: hashedPassword,
            name
        });

        const { password, ...result } = user;
        return result;
    }
}
