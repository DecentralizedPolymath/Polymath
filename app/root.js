const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const connect = require('react-redux').connect

const App = require('./app')

module.exports = connect(mapStateToProps)(Root)


inherits(Root, Component)
function Root () { Component.call(this) }

function mapStateToProps (state) {
  return {
    // state from plugin

  }
}
// this is the render function
Root.prototype.render = function () {
  // these are the things you want to render
  return (
    h('.main-container', {
      style: {
      }
    }, message || h(App, {
      address: web3.eth.accounts[0],
      }
    ))
  )
}
