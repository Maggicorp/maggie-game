'use strict'

const store = require('../store.js')

const winsArray = require('../board/events.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('.instruction-box').text('Great Job! Now sign in!')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.instruction-box').text('Something went wrong, try again')
}

const signInSuccess = (response) => {
  console.log(response)
  $('.instruction-box').text('You did it! Now you can play! You must click create game to start a new game. ')
  store.user = response.user
  $('#display-all-games').text('')
  $('#display-one-game').text('')
  $('.sign-out').css('display', 'block')
  $('.create-game').css('display', 'block')
  $('.change-password').css('display', 'block')
  $('.display-all-games').css('display', 'block')
  $('.display-one-game').css('display', 'block')
  $('.get-all-games').css('display', 'block')
  $('.get-one-game').css('display', 'block')
  $('#sign-in').css('display', 'none')
  $('#sign-up').css('display', 'none')
}

const signInFailure = (error) => {
  console.error(error)
  $('.instruction-box').text('Something went wrong, try again')
}

const changePasswordSuccess = (response) => {
  console.log(response)
  $('.instruction-box').text('password successfully changed')
}

const changePasswordFailure = (error) => {
  console.log(error)
  console.log('It was an error')
  $('.instruction-box').text('Something went wrong, try again')
}

const signOutSuccess = () => {
  $('.instruction-box').text('Goodbye')
  store.user = null
  store.games = null
  $('.game_section').css('display', 'none')
  $('.sign-out').css('display', 'none')
  $('.create-game').css('display', 'none')
  $('.change-password').css('display', 'none')
  $('.display-all-games').css('display', 'none')
  $('.display-one-game').css('display', 'none')
  $('.get-all-games').css('display', 'none')
  $('.get-one-game').css('display', 'none')
  $('#sign-in').css('display', 'block')
  $('#sign-up').css('display', 'block')
  for (let i = 0; i < winsArray.length; i++) {
    winsArray[i] = ''
  }
}

const signOutFailure = (error) => {
  console.error(error)
  $('.instruction-box').text('Something went wrong, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
