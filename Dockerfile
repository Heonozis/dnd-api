FROM node:alpine3.16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN yarn

COPY . /usr/src/app

RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]