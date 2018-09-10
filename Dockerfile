FROM stolyarenko/docker-node-oracle:latest

WORKDIR /usr/src/app

COPY ./src/*.* ./

RUN npm install

CMD ["npm", "start"]
