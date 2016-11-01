const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const CourseCard = require('./course-cards')
// this is where you export 'the component' for future use
module.exports = CourseBoard

inherits(CourseBoard, Component)
function CourseBoard () { Component.call(this) }

// this is the render function
CourseBoard.prototype.render = function () {
  // these are the things you want to render

  return (
    h('.board', {
      style: {
      }
    }, [
      h(CourseCard),
    ])
  )
}
