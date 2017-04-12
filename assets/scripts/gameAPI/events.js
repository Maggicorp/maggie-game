'use strict'

const api = require('./api')
const board = require('../board/events.js')
const ui = require('./ui')

const onCreateGame = function () {
  event.preventDefault()
  console.log('click works')
  api.createNew()
    .then(board.newGameSuccess)
    .catch(board.newGameFailure)
}

const onGetAllGames = function () {
  event.preventDefault()
  console.log('Get all games works')
  api.getAllGames()
    .then(ui.getGameSuccess)
    .catch(ui.getGameFailure)
}

const addGameHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
  $('#get-all-games').on('submit', onGetAllGames)
}

module.exports = {
  addGameHandlers
}
