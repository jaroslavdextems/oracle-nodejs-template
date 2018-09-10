const oracleDB = require('./server-oracle') // get oracledb utils

oracleDB.select(`select 5 from dual`)
    .then( result => {
        console.log ("OK:")
        console.log( result )
    })
    .catch( err => {
        console.log("ERROR:")
        console.log( err )
    })
