'use strict'

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}

const turn = [1]

// const playX = function (ind, arr, obj) {
//   arr[ind] = 'x'
//   console.log(arr)
//   $(obj).innerHTML(<h1>X</h1>)
// }
//
// const playO = function (ind, arr, obj) {
//   arr[ind] = 'o'
//   console.log(arr)
//   $(obj).innerHTML(<h1>O</h1>)
// }

const gameArray = ['', '', '', '', '', '', '', '', '']

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
    if (turn[0] % 2 === 1) {
      console.log('x turn')
      turn[0]++
      // playX(idNum, gameArray, box)
    } else if (turn[0] % 2 === 0) {
      console.log('o turn')
      turn[0]++
//      playO(idNum, gameArray, box)
    }
  }
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

module.exports = {
  addBoardHandlers
}
