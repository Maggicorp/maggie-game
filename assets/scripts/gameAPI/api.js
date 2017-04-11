'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createNew = () => {
  console.log('runsCreateNew')
  console.log(store.user.token)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {Authorization: 'Token token=' + store.user.token},
    data: {}
  })
}

module.exports = {
  createNew
}
