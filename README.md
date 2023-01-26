WSL2
- No permission to push to github.com: `ssh-add ~/.ssh/githubKey`

Backend
- Start stack (ez): `docker-compose up`
- Start stack (if install new pckg or change dockerfile): `docker-compose up -d -V --build`

-d: Run the containers in detached mode

-V: Forces a fresh install of the dependencies in the container (required as we've installed new npm packages)

--build: Rebuilds the images (required as we tweaked the Dockerfile)

- Run migrations (LOCALLY): `npx prisma migrate dev --name {migration_name}`

- Run prisma studio: `npx prisma studio`

Frontend
- npm start
    Starts the development server.

- npm run build
    Bundles the app into static files for production.

- npm test
    Starts the test runner.

- npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!