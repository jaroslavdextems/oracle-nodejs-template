FROM stolyarenko/docker-node-oracle:12.2

WORKDIR /usr/src/app

COPY ./src/*.* ./

RUN npm install

CMD ["npm", "start"]
