const express = require('express')
const oracleDB = require('./server-oracle') // get oracledb utils
const es = require('./server-es') // get elasticsearch utils

const app = express()

let state = { 
    health: false,
    message: "started",
    application: "posdss_metrics_exporter"
}

function stateUpdate( healthValue ) {
    state.health = healthValue
}

oracleDB.select(`select 5 from dual`)
    .then( result => {
        console.log ("OK:")
        console.log( result )
        stateUpdate( true ) 
    })
    .catch( err => {
        console.log("ERROR:")
        console.log( err )
        stateUpdate( false ) 
    })

app.get('/health', function (req, res) {
    res.jsonp(JSON.stringify( state ))
})

app.listen(3000)
