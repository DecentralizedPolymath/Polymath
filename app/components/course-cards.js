const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
// this is where you export 'the component' for future use
module.exports = CourseCard

inherits(CourseCard, Component)

function CourseCard () { Component.call(this) }

// this is the render function
CourseCard.prototype.render = function () {
  // these are the things you want to render

  return (
    h('.card', {
      style: {
      }
    }, [
      h('h3.title','some text goes here'),
    ])
  )
}
