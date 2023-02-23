import { Controller, Request, Post, UseGuards, Inject, Body, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, LoginDto } from './auth.controller.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('auth/login')
    async login(@Body() loginDto: LoginDto) {
        const { email, password } = loginDto;
        const user = this.authService.validateUser(email, password);
        
        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }

    @Post('auth/new-user')
    async createUser(@Body() createUserDto: CreateUserDto) {
        const { email, password, name } = createUserDto;
        const user = this.authService.createUser(email, password, name);

        if (!user) {
            throw new BadRequestException();
        }

        return user;
    }
}