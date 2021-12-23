FROM node:16-alpine

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash

EXPOSE 1337

RUN mkdir /srv/app && chown 1000:1000 -R /srv/app

WORKDIR /srv/app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY public ./public
COPY database ./database
COPY config ./config

CMD ["npm", "start"]
