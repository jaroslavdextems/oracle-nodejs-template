'use strict'

const oracledb = require('oracledb')
const Config = require('./config')

module.exports = {

    select: function (query) {

        const globalResult = new Promise (
            (resolve, reject) => {
                let queryRes = oracledb.getConnection(
                    {
                        user: Config.user,
                        password: Config.password,
                        connectString: Config.connectString
                    })
                    .then(function (connection) {
                        return connection.execute(query, [Config.oracleDBTimeout])
                            .then(function (data) {
                                connection.close();
                                resolve (data)
                            })
                            .catch(function (err) {
                                connection.close();
                                reject (err)
                            });
                    })
                    .catch(function (err) {
                        reject(err)
                    })
            }
        )

        return globalResult
    }
}
