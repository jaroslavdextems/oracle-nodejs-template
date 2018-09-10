FROM stolyarenko/docker-node-oracle:12.1

WORKDIR /usr/src/app

COPY ./src/*.* ./

RUN npm install

CMD ["npm", "start"]
