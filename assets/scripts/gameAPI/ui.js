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

const getGameSuccess = (response) => {
  console.log('response: ', response)
  $('#display-all-games').text(JSON.stringify(response))
}

const getGameFailure = () => {
  console.log('did not work')
}

module.exports = {
  updateGameSuccess,
  updateGameFailure,
  getGameSuccess,
  getGameFailure
}
