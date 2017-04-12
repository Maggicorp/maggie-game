'use strict'

const config = require('../config.js')
const store = require('../store.js')

const createNew = () => {
  console.log('runsCreateNew')
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

const updateGame = () => {
  console.log('runs update')
  console.log(store)
  console.log(store.game.id)
  return $.ajax({
    url: config.apiOrigin + '/games/ ' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {}
  })
}

module.exports = {
  createNew,
  updateGame
}
