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

const updateGame = (index, value, isOver) => {
  console.log('runs update')
  console.log(store)
  console.log(store.game.id)
  console.log(store.game)
  return $.ajax({
    url: config.apiOrigin + '/games/ ' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': isOver
      }
    }
  })
}

module.exports = {
  createNew,
  updateGame
}
