FROM node:latest

WORKDIR /usr/src/app

COPY server/package*.json ./server/

RUN cd ./server && npm install

COPY server/ ./server/

COPY client/package*.json ./client/

RUN cd ./client && npm install

COPY client/ ./client/

CMD npm run
