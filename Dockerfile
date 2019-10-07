FROM node:11-alpine AS build

RUN apk add --no-cache --virtual .gyp python make g++ libpng-dev

WORKDIR /app
ENV NODE_ENV=production

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --non-interactive

COPY . .
RUN npm install
RUN yarn build