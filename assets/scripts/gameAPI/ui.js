'use strict'

const store = require('../store.js')

const updateGameSuccess = (response) => {
  console.log('response: ', response)
  console.log('response.game: ', response.game)
  store.game = response.game
}

const updateGameFailure = () => {
  console.error('somethng went wrong')
}

module.exports = {
  updateGameSuccess,
  updateGameFailure
}
