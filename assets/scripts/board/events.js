'use strict'

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}

const gameArray = ['', '', '', '', '', '', '', '', '']

const onBoardClick = function (event) {
  event.preventDefault()
  console.log('click')
  const box = event.target
  const idNum = $(box).attr('data-id')
  console.log(idNum)
  console.log(isFree(idNum, gameArray))
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

module.exports = {
  addBoardHandlers
}
