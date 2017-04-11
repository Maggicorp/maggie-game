'use strict'

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}

let turn = 1

const gameArray = ['1', '', '', '', '', '', '', '', '']

const onBoardClick = function (event) {
  event.preventDefault()
  console.log('click')
  const box = event.target
  const idNum = $(box).attr('data-id')
  console.log(idNum)
  const freeSpot = (isFree(idNum, gameArray))
  if (!freeSpot) {
    console.log('spot taken')
    return false
  } else {
    console.log('spot vacant')
    return true
  }
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

module.exports = {
  addBoardHandlers
}
