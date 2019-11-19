FROM node:10 AS builder

WORKDIR /src

RUN npm i -g parcel-bundler babel-types

COPY *.json /src/

RUN npm ci 

COPY . /src/

RUN npm run build

RUN ls /src

FROM xmorse/nginx-for-react:latest

COPY --from=builder /src/dist /var/www