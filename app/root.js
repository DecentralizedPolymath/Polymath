const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const Provider = require('react-redux').Provider
const connect = require('react-redux').connect

const App = require('./app')

module.exports = Root

inherits(Root, Component)
function Root () { Component.call(this) }

// this is the render function
Root.prototype.render = function () {
  // these are the things you want to render
  return (
    h(Provider, {
      store: this.props.store,
    }, [h(App)]
    )
  )
}
