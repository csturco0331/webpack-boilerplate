import $ from 'jquery'

import 'normalize.css'

import './styles'

$(document).ready(() => {
  $('#app')
    .html('hey')
    .click(() => console.log('lol'))
    .click()
    throw new TypeError()
})
