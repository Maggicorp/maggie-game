'use strict'

const store = require('../store.js')

const updateGameSuccess = (response) => {
  store.game = response.game
}

const updateGameFailure = () => {
}

const getGameSuccess = (response) => {
  console.log('response: ', response)
  $('#display-all-games').text(JSON.stringify(response))
}

const getGameFailure = () => {
  $('#display-all-games').text('error')
}

const oneGameSuccess = (response) => {
  $('#display-one-game').text(JSON.stringify(response))
}

const oneGameFailure = () => {
  $('#display-one-game').text('Error, make sure to enter a valid game id')
}

module.exports = {
  updateGameSuccess,
  updateGameFailure,
  getGameSuccess,
  getGameFailure,
  oneGameSuccess,
  oneGameFailure
}
