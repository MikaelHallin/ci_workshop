FROM node:latest as base2

ADD . /app

WORKDIR /app

RUN npm install .

EXPOSE 3000

FROM base2 as test

RUN npm run test

FROM base2 as build

CMD ["node", "index.js"]

