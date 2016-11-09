import $ from 'jquery'

import 'normalize.css'

import './styles'

$(document).ready(() => {
  // $('#app')
  //   .html('hey')
  //   .click(() => console.log('lol'))
  //   .click()
  //   throw new TypeError()

// let changeColor = (y) => {
//   var classNames = $(y).attr('class').split(' ')
//   if (classNames.some(x => x === 'red')) return 'red green'
//   if (classNames.some(x => x === 'green')) return 'green blue'
//   if (classNames.some(x => x === 'blue')) return 'blue red'
// }
//
//   $('#first')
//     .click(function () {$('#first').toggleClass(changeColor(this))})
//
//   $('#second')
//     .click(function() {$('#second').toggleClass(changeColor(this))})
//
//   $('#third')
//     .click(function() {$('#third').toggleClass(changeColor(this))})

  let colorChange = function(color) {
    if (color === 'rgb(255, 0, 0)') return 'green'
    if (color === 'rgb(0, 128, 0)') return 'blue'
    return 'red'
  }

  $('.colorChanger')
    .click(function() {
      let color = $(this).css('background-color')
      $(this).css('background-color', colorChange(color))
    })
})
