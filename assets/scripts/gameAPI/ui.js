'use strict'

const store = require('../store.js')

const updateGameSuccess = (response) => {
  store.game = response.game
}

const updateGameFailure = () => {
}

const printGames = (data) => {
  const newArray = []
  for (let i = 0; i < data.games.length; i++) {
    newArray.push('\nGame id:' + data.games[i].id + ' Game was completed is ' + data.games[i].over)
  }
  return newArray
}

const getGameSuccess = (response) => {
  if (response.games.length === 0) {
    $('#display-all-games').text('You did not play any games!?! Play some games first')
  } else {
    $('#display-all-games').text('Hello ' + response.games[0].player_x.email + '! \r\n You played ' + response.games.length + ' games.  Here they are: \r\n' + printGames(response))
  }
}
const getGameFailure = () => {
  $('#display-all-games').text('error')
}

const oneGameSuccess = (response) => {
  $('#display-one-game').text(response.game.id)
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
