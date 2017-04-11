'use strict'

//const api = require('./api')
//const ui = require('./ui')

const gameArray = ['', '', '', '', '', '', '', '', '']

const onBoardClick = function(event) {
  event.preventDefault()
  console.log('click')
  const box = event.target
  const idNum = $(box).attr('data-id')
  console.log(idNum)
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

module.exports = {
  addBoardHandlers
}
