'use strict'

const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('.instruction-box').text('Great Job! Now sign up!')
}

const signUpFailure = (error) => {
  console.error(error)
  $('.instruction-box').text('Something went wrong, try again')
}

const signInSuccess = (response) => {
  console.log(response)
  $('.instruction-box').text('You did it! Now you can play! You must click create game to start a new game. ')
  store.user = response.user
  $('.sign-out').css('display', 'block')
  $('.create-game').css('display', 'block')
  $('.change-password').css('display', 'block')
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
  $('.game_section').css('display', 'none')
  $('.sign-out').css('display', 'none')
  $('.create-game').css('display', 'none')
  $('.change-password').css('display', 'none')
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
