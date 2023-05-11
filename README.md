Boilerplate I've used for personal projects, feel free to use it

Useful commands:

Backend
- Start stack (quick): `docker-compose -f docker-compose.dev.yml --env-file .env.local up`
- Start stack (if new pckg installed or dockerfile changed): `docker-compose -f docker-compose.dev.yml --env-file .env.local up -d -V --build`

Switches cheat sheet:

- `-d`: Run the containers in detached mode
- `-V`: Forces a fresh install of the dependencies in the container (required as we've installed new npm packages)
- `--build`: Rebuilds the images (required when Dockerfile changes)

- Run migrations (LOCALLY): `npx prisma migrate dev --name {migration_name}`
- 
- Run prisma studio: `npx prisma studio`

Frontend

- Start stack (quick): `docker-compose up`

- Start stack (if new pckg installed or dockerfile changed): `docker-compose up -d -V --build`

- npm start

- npm run build
    
WSL2
- No permission to push to github.com (ssh config cleared every vm restart bug): `eval "$(ssh-agent -s)" && ssh-add ~/.ssh/githubKey`
