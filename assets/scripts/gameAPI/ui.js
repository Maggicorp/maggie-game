'use strict'

const storeGameApi = require('../storeGameApi.js')

const newGameSuccess = (response) => {
  console.log(response)
  $('.instruction-box').text('You did it! Now you can play!')
  storeGameApi.user = response.user
  $('.game_section').css('display', 'block')
}

const newGameFailure = (error) => {
  console.error(error)
  $('.instruction-box').text('Something went wrong, try again')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
