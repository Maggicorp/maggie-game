'use strict'

const store = require('../store.js')

const updateGameSuccess = (response) => {
  store.game = response.game
}

const updateGameFailure = () => {}

const printGames = (data) => {
  const newArray = []
  for (let i = 0; i < data.games.length; i++) {
    newArray.push('\nGame id:' + data.games[i].id + ' Game was completed is ' + data.games[i].over)
  }
  return newArray
}

const getGameSuccess = (response) => {
  if (response.games.length === 0) {
    $('#display-all-games').text('You did not play any games!?! Play some games first.  To start a new game click the create game button.')
  } else {
    $('#display-all-games').text('Hello ' + response.games[0].player_x.email + '! \r\n You played ' + response.games.length + ' games.  You won ' + didXwin(response) + ' games.  Here are all the games: \r\n' + printGames(response))
  }
}

const getGameFailure = () => {
  $('#display-all-games').text('error')
}

const oneGameSuccess = (response) => {
  $('#display-one-game').text('This game was completed is ' + response.game.over + '.\r\n The game moves looked like ' + response.game.cells + '. The outcome of the game was ' + gameOutcome(response) + '!!!')
}

const oneGameFailure = () => {
  $('#display-one-game').text('Something went wrong. Please make sure to enter a valid game id.  Click on get all games to find a list of all the games you have played. ')
}

const gameOutcome = function (data) {
  const arr = data.game.cells
  if (data.game.over === false) {
    return 'inconclusive.  Finish your game next time'
  } else {
    if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== '') {
      if (arr[0] === 'x') {
        return 'x won'
      } else if (arr[0] === 'o') {
        return 'o won'
      }
    } else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== '') {
      if (arr[3] === 'x') {
        return 'x won'
      } else if (arr[3] === 'o') {
        return 'o won'
      }
    } else if (arr[6] === arr[7] && arr[6] === arr[8] && arr[8] !== '') {
      if (arr[6] === 'x') {
        return 'x won'
      } else if (arr[6] === 'o') {
        return 'o won'
      }
    } else if (arr[0] === arr[3] && arr[0] === arr[6] && arr[6] !== '') {
      if (arr[0] === 'x') {
        return 'x won'
      } else if (arr[0] === 'o') {
        return 'o won'
      }
    } else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[7] !== '') {
      if (arr[1] === 'x') {
        return 'x won'
      } else if (arr[1] === 'o') {
        return 'o won'
      }
    } else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[8] !== '') {
      if (arr[2] === 'x') {
        return 'x won'
      } else if (arr[2] === 'o') {
        return 'o won'
      }
    } else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[8] !== '') {
      if (arr[0] === 'x') {
        return 'x won'
      } else if (arr[0] === 'o') {
        return 'o won'
      }
    } else if (arr[2] === arr[4] && arr[2] === arr[6] && arr[6] !== '') {
      if (arr[2] === 'x') {} else if (arr[2] === 'o') {
        return 'o won'
      }
    } else {
      return 'a tie'
    }
  }
}

const didXwin = function (data) {
  const result = ['0', '7']
  for (let i = 0; i < data.games.length; i++) {
    const arr = data.games[i].cells
    if (data.games[i].over === false) {
      result[1]++
    } else if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] !== '') {
      if (arr[0] === 'x') {
        result[0]++
      }
    } else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== '') {
      if (arr[3] === 'x') {
        result[0]++
      }
    } else if (arr[6] === arr[7] && arr[6] === arr[8] && arr[8] !== '') {
      if (arr[6] === 'x') {
        result[0]++
      }
    } else if (arr[0] === arr[3] && arr[0] === arr[6] && arr[6] !== '') {
      if (arr[0] === 'x') {
        result[0]++
      }
    } else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[7] !== '') {
      if (arr[1] === 'x') {
        result[0]++
      }
    } else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[8] !== '') {
      if (arr[2] === 'x') {
        result[0]++
      }
    } else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[8] !== '') {
      if (arr[0] === 'x') {
        result[0]++
      }
    } else if (arr[2] === arr[4] && arr[2] === arr[6] && arr[6] !== '') {
      if (arr[2] === 'x') {
        result[0]++
      }
    }
  }
  return result[0]
}

module.exports = {
  updateGameSuccess,
  updateGameFailure,
  getGameSuccess,
  getGameFailure,
  oneGameSuccess,
  oneGameFailure
}
