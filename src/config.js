'use strict'

module.exports = {
    user: process.env.NODE_ORACLEDB_USER || "user",
    password: process.env.NODE_ORACLEDB_PASSWORD || "pass",
    connectString: process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/oracle-db-instance",
    externalAuth: process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false,
    oracleDBTimeout: 180
};
