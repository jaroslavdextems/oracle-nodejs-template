FROM stolyarenko/docker-node-oracle:12.2-alpine

WORKDIR /usr/src/app

COPY ./src/*.* ./

RUN npm install

CMD ["npm", "start"]
