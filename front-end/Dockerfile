FROM node:alpine3.18 AS build

WORKDIR /build

COPY package.json package.json
COPY yarn.lock yarn.lock

COPY . .
RUN yarn

COPY public/ public
COPY src/ src
RUN yarn build

RUN yarn global add serve
CMD ["serve", "-s", "build"]