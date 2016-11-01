const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
// this is where you export 'the component' for future use
module.exports = NewComponent

inherits(NewComponent, Component)
function NewComponent () { Component.call(this) }

// this is the render function
NewComponent.prototype.render = function () {
  // these are the things you want to render

  return (
    h('div', {
      style: {
      }
    }, 'some text goes here')
  )
}
