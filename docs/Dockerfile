FROM node:10 AS builder

WORKDIR /workdir

RUN npm i -g yarn

COPY *.json *.lock /workdir/

RUN yarn

COPY . /workdir/

RUN yarn build

FROM xmorse/nginx-for-react:latest

COPY --from=builder /workdir/.docs/dist /var/www