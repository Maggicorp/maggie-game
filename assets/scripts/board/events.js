'use strict'

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}

const stopGame = function () {
  console.log('game is over')
}

const whoWon = function (arr) {
  if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== '') {
    console.log(arr[0], 'wins!')
    stopGame()
    return
  } else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== '') {
    console.log(arr[3], 'wins!')
    stopGame()
    return
  } else if (arr[6] === arr[7] && arr[6] === arr[8] && arr[8] !== '') {
    console.log(arr[6], 'wins!')
    stopGame()
    return
  } if (arr[0] === arr[3] && arr[0] === arr[6] && arr[6] !== '') {
    console.log(arr[0], 'wins!')
    stopGame()
    return
  } else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[7] !== '') {
    console.log(arr[1], 'wins!')
    stopGame()
    return
  } else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[8] !== '') {
    console.log(arr[2], 'wins!')
    stopGame()
    return
  } else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[8] !== '') {
    console.log(arr[0], 'wins!')
    stopGame()
    return
  } else if (arr[2] === arr[4] && arr[2] === arr[6] && arr[6] !== '') {
    console.log(arr[2], 'wins!')
    stopGame()
    return
  } else {
    console.log('Play on')
    return
  }
}

const turn = [1]

const playX = function (ind, arr, obj) {
  arr[ind] = 'x'
  console.log(arr)
  $(obj).text('X')
}

const playO = function (ind, arr, obj) {
  arr[ind] = 'o'
  console.log(arr)
  $(obj).text('O')
}

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
      playX(idNum, gameArray, box)
    } else if (turn[0] % 2 === 0) {
      console.log('o turn')
      turn[0]++
      playO(idNum, gameArray, box)
    }
  }
  whoWon(gameArray)
  console.log('reach here?!?')
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

module.exports = {
  addBoardHandlers
}
