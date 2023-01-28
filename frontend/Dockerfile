FROM node:18-alpine AS development

# Add a work directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# Copying this first prevents re-running npm install on every code change.
COPY package*.json ./

RUN npm ci

# Copy app files
COPY . .

EXPOSE 3000

###################
# BUILD FOR PRODUCTION
###################
FROM node:18-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

COPY --from=development /usr/src/app/node_modules ./node_modules

COPY . .

RUN npm run build

###################
# PRODUCTION
###################
FROM nginx:1.23.3 As production

WORKDIR /usr/share/nginx/html

# Remove default nginx static resources && configs
RUN rm -rf ./*
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

COPY --from=build /usr/src/app/build .

EXPOSE 80