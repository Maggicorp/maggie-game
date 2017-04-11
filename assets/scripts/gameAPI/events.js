'use strict'

const api = require('./api')
const ui = require('./ui')

const onCreateGame = function () {
  event.preventDefault()
  console.log('click works')
  api.createNew()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const addGameHandlers = () => {
  $('#create-game').on('submit', onCreateGame)
}

module.exports = {
  addGameHandlers
}
