'use strict'

const api = require('./api')
const board = require('../board/events.js')

const onCreateGame = function () {
  event.preventDefault()
  console.log('click works')
  api.createNew()
    .then(board.newGameSuccess)
    .catch(board.newGameFailure)
}

const addGameHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
}

module.exports = {
  addGameHandlers
}
