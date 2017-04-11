'use strict'

//const api = require('./api')
//const ui = require('./ui')

const onBoardClick = function(event) {
  event.preventDefault()
  console.log('click')
  console.log(event.target)
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

module.exports = {
  addBoardHandlers
}
