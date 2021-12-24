FROM node:16-alpine

RUN apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash

EXPOSE 1337

ENV NODE_ENV production

RUN mkdir /srv/app

WORKDIR /srv/app

COPY package.json yarn.lock ./

RUN yarn install --production --frozen-lockfile

COPY favicon.ico ./favicon.ico
COPY public ./public
COPY database ./database
COPY config ./config
COPY build ./build
COPY src ./src

CMD ["npm", "start"]
