'use strict'

const elasticsearch = require('elasticsearch') // get elastic lib
const config = require('./config') // get configurations

const client = new elasticsearch.Client({
  hosts: config.elasticURL,
  requestTimeout: config.elasticTimeout
})

function chunker(array, size) {
  let res = array.map(function (e, i) {
    return i % size === 0 ? array.slice(i, i + size) : null;
  }).filter(function (e) { return e; })
  return res
}

function bulkRecords($index, $type, data) { // insert array
  let $data = {
    body: []
  }
  data.forEach(function (item, i, arr) {
    $data.body.push({
      index: {
        _index: $index,
        _type: $type,
        _id: item.id
      }
    },
      item
    )
  })
  return client.bulk($data).then(() => { // post data to elasticsearch
    console.info($type + ' data posted to Elasticsearch')
  }, (error) => {
    console.error(error.message)
  })
}

module.exports = {
  insert ($index, $type, data) { // insert one object
    return client.index({
      index: $index,
      type: $type,
      id: data.id,
      body: data
    })
  },
  insertMany (_index, _type, data) { // insert array
    if (config.esPackageSize !== 0) {
      chunker(data, config.esPackageSize).forEach(function (item, i, arr) {
        bulkRecords(_index, _type, item)
      })
    } else {
      bulkRecords(_index, _type, data)
    }
  }
}
