FROM node:10

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g yarn

# Bundle app source
COPY . .
RUN yarn install --production && yarn cache clean
RUN yarn global add node-gyp
RUN yarn global add gatsby-cli
RUN yarn build

EXPOSE 9000
CMD [ "yarn", "serve" ]