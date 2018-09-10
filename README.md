# oracle-nodejs-template
Template project of Dockerized OracleDB usage with Node.js

Template based on Docker image (stolyarenko/docker-node-oracle) from next door repo https://github.com/jaroslavdextems/docker-node-oracle

To connect a Database please specify connection params in ./src/config.js or run in it with specified credentials:
```bash
docker build -t oracle-node-template:latest .

docker run \
    --rm \
    --name "oracle-node-template" \
    -e NODE_ORACLEDB_USER="<your-username>" \
    -e NODE_ORACLEDB_PASSWORD="<your-password>" \
    -e NODE_ORACLEDB_CONNECTIONSTRING=<your-server>:<your-port-usual-1521>/<your-service-name>" \
oracle-node-template:latest
```
