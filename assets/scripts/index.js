'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')

const authEvents = require('./auth/events.js')

const boardEvents = require('./board/events.js')

const gameEvents = require('./gameAPI/events.js')

// On document ready
$(() => {
  authEvents.addHandlers()
  boardEvents.addBoardHandlers()
  gameEvents.addGameHandlers()
})
