const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const connect = require('react-redux').connect
const UserPanel = require('./components/user-panel')
const CourseBoard = require('./components/course-view')

module.exports = connect(mapStateToProps)(App)

inherits(App, Component)
function App () { Component.call(this) }

function mapStateToProps (state) {
  return {
    // state from plugin
    message: state.appState.message,
    address: state.appState.address
  }
}

App.prototype.render = function () {
  var props = this.props
  const address = props.address
  return (
    h('.flex-row.app', {
      style: {
      }
    }, [
      h(UserPanel, {
        address: address,
      }),
      h(CourseBoard),
    ])
  )
}
