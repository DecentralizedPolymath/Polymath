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
    address: state.appState.address,
    currentView: state.appState.currentView,
  }
}

App.prototype.render = function () {
  var props = this.props
  const address = props.address
  return (
    h('div', {
      style: {
      }
    }, this.renderMainView())
  )
}

App.prototype.renderMainView = function () {
  var props = this.props
  switch (props.currentView.name) {
    case 'accountDashboard':
      return h('.flex-row.app', [
        h(UserPanel, {
          address: address,
        }),
        h(CourseBoard),
      ])
    default:
      return h('.empty-for-now')
  }
}
