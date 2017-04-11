'use strict'

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}

// let turn = 1

// const whoseTurn = function (turn) {
//   console.log('turn is ', turn)
//   if (turn % 2 === 1) {
//     console.log('x turn')
//     turn++
//   } else if (turn % 2 === 0) {
//     console.log('o turn')
//     turn++
//   }
// }

const playX = function (ind, arr, obj) {
  arr[ind] = 'x'
  console.log(arr)
  $(obj).attr('background-color', 'blue')
}

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
  //  whoseTurn(turn)
    playX(idNum, gameArray, box)
  }
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

module.exports = {
  addBoardHandlers
}
