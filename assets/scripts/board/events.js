'use strict'

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}

// need a way to restart it on sign out
const winsArray = [0, 0, 0]

let gameOver = false

const stopGame = function () {
  console.log('Game is over')
  gameOver = true
}

const whoWon = function (arr) {
  if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== '') {
    $('.messages').text(arr[0] + ' wins!')
    if (arr[0] === 'x') {
      winsArray[0]++
    } else if (arr[0] === 'o') {
      winsArray[1]++
    }
    stopGame()
    return
  } else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== '') {
    $('.messages').text(arr[3] + ' wins!')
    if (arr[3] === 'x') {
      winsArray[0]++
    } else if (arr[3] === 'o') {
      winsArray[1]++
    }
    stopGame()
    return
  } else if (arr[6] === arr[7] && arr[6] === arr[8] && arr[8] !== '') {
    $('.messages').text(arr[6] + ' wins!')
    if (arr[6] === 'x') {
      winsArray[0]++
    } else if (arr[6] === 'o') {
      winsArray[1]++
    }
    stopGame()
    return
  } if (arr[0] === arr[3] && arr[0] === arr[6] && arr[6] !== '') {
    $('.messages').text(arr[0] + ' wins!')
    if (arr[0] === 'x') {
      winsArray[0]++
    } else if (arr[0] === 'o') {
      winsArray[1]++
    }
    stopGame()
    return
  } else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[7] !== '') {
    $('.messages').text(arr[1] + ' wins!')
    if (arr[1] === 'x') {
      winsArray[0]++
    } else if (arr[1] === 'o') {
      winsArray[1]++
    }
    stopGame()
    return
  } else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[8] !== '') {
    $('.messages').text(arr[2] + ' wins!')
    stopGame()
    if (arr[2] === 'x') {
      winsArray[0]++
    } else if (arr[2] === 'o') {
      winsArray[1]++
    }
    return
  } else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[8] !== '') {
    $('.messages').text(arr[0] + ' wins!')
    if (arr[0] === 'x') {
      winsArray[0]++
    } else if (arr[0] === 'o') {
      winsArray[1]++
    }
    stopGame()
    return
  } else if (arr[2] === arr[4] && arr[2] === arr[6] && arr[6] !== '') {
    $('.messages').text(arr[2] + ' wins!')
    if (arr[2] === 'x') {
      winsArray[0]++
    } else if (arr[2] === 'o') {
      winsArray[1]++
    }
    stopGame()
    return
  } else if (turn[0] === 10) {
    $('.messages').text('It is a tie!')
    winsArray[2]++
    stopGame()
    return
  } else {
    $('.messages').text('Play on')
    console.log(turn, 'turn')
    return
  }
}

const api = require('../gameAPI/api.js')
const ui = require('../gameAPI/ui.js')

const updateGame = function (index, value) {
  console.log('updateGame function')
  api.updateGame(index, value)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const turn = [1]
// playX includes logging to create event

const playX = function (ind, arr, obj) {
  arr[ind] = 'x'
  console.log(arr)
  $(obj).text('X')
}

const clearBoard = function () {
  $('.board_square').text('')
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
  let val = ''
  if (!freeSpot || gameOver) {
    console.log('spot taken or game is over')
    return false
  } else {
    console.log('spot vacant')
    if (turn[0] % 2 === 1) {
      console.log('x turn')
      val = 'x'
      turn[0]++
      playX(idNum, gameArray, box)
    } else if (turn[0] % 2 === 0) {
      console.log('o turn')
      val = 'o'
      turn[0]++
      playO(idNum, gameArray, box)
    }
  }
  whoWon(gameArray)
  console.log('win array', winsArray)
  updateGame(idNum, val)
}

const onNewGame = function () {
  $('.messages').text('Play again!')
  for (let i = 0; i < 9; i++) {
    gameArray[i] = ''
  }
  clearBoard()
  gameOver = false
  turn[0] = 1
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
//  $('.new_game').on('click', onNewGame)
}

const store = require('../store.js')

const newGameSuccess = (response) => {
  console.log(response)
  $('.instruction-box').text('You did it! Now you can play!')
  store.game = response.game
  onNewGame()
  $('.game_section').css('display', 'block')
}

const newGameFailure = (error) => {
  console.error(error)
  $('.instruction-box').text('Something went wrong, try again')
}

module.exports = {
  addBoardHandlers,
  onNewGame,
  newGameSuccess,
  newGameFailure
}
