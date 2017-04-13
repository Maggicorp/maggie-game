'use strict'

const isFree = (idNum, arr) => {
  if (arr[idNum] === '') {
    return true
  } else {
    return false
  }
}

const winsArray = [0, 0, 0]

let gameOver = false

const stopGame = function () {
  $('.board_square').css('background-color', 'blue')
  $('.board_square').mouseover(function () {
    $(this).css('background-color', '#003366')
  })
  $('.board_square').mouseout(function () {
    $(this).css('background-color', 'blue')
  })
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
  }
  if (arr[0] === arr[3] && arr[0] === arr[6] && arr[6] !== '') {
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
    return
  }
}

const api = require('../gameAPI/api.js')
const ui = require('../gameAPI/ui.js')

const updateGame = function (index, value, gameOver) {
  api.updateGame(index, value, gameOver)
    .then(ui.updateGameSuccess)
    .catch(ui.updateGameFailure)
}

const turn = [1]

const playX = function (ind, arr, obj) {
  arr[ind] = 'x'
  $(obj).text('X')
}

const clearBoard = function () {
  $('.board_square').text('')
}

const playO = function (ind, arr, obj) {
  arr[ind] = 'o'
  $(obj).text('O')
}

const gameArray = ['', '', '', '', '', '', '', '', '']

const onBoardClick = function(event) {
  event.preventDefault()
  const box = event.target
  const idNum = $(box).attr('data-id')
  const freeSpot = (isFree(idNum, gameArray))
  let val = ''
  if (!freeSpot || gameOver) {
    return false
  } else {
    if (turn[0] % 2 === 1) {
      val = 'x'
      turn[0]++
        playX(idNum, gameArray, box)
    } else if (turn[0] % 2 === 0) {
      val = 'o'
      turn[0]++
        playO(idNum, gameArray, box)
    }
  }
  whoWon(gameArray)
  updateGame(idNum, val, gameOver)
  $('#x-wins').text(winsArray[0])
  $('#o-wins').text(winsArray[1])
  $('#tie').text(winsArray[2])
}

const onNewGame = function() {
  $('.messages').text('Play again!')
  for (let i = 0; i < 9; i++) {
    gameArray[i] = ''
  }
  clearBoard()
  gameOver = false
  turn[0] = 1
  $('.board_square').css('background-color', 'crimson')
}

const addBoardHandlers = () => {
  $('.board_square').on('click', onBoardClick)
}

const store = require('../store.js')

const newGameSuccess = (response) => {
  $('.instruction-box').text('You did it! Now you can play!')
  store.game = response.game
  onNewGame()
  $('.game_section').css('display', 'block')
  $('.board_square').mouseover(function () {
    $(this).css('background-color', '#821516')
  })
  $('.board_square').mouseout(function () {
    $(this).css('background-color', 'crimson')
  })
}

const newGameFailure = () => {
  $('.instruction-box').text('Something went wrong, try again')
}

module.exports = {
  addBoardHandlers,
  onNewGame,
  newGameSuccess,
  newGameFailure,
  winsArray
}
