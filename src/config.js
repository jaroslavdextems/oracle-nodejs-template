'use strict'

module.exports = {
    user: process.env.NODE_ORACLEDB_USER || "user",
    password: process.env.NODE_ORACLEDB_PASSWORD || "pass",
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/oracle-db-instance",
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
    elasticURL: ['http://elastic-instance-1:9200/', 'http://elastic-instance-2:9200/'],
    elasticTimeout: 180000,
    esPackageSize: 10000, //Set it to 0 to don't use partly sending data to ElasticSearch
    oracleDBTimeout: 180
};
