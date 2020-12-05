FROM node:15.3-alpine

WORKDIR /app

COPY package.json .

ENV NODE_ENV production

RUN yarn install

COPY . .

CMD [ "yarn", "prod" ]

