const extend = require('xtend')
const reduceApp = require('./reducers/app')

module.exports = rootReducer

function rootReducer (state, action) {
  // clone
  state = extend(state)

  state.appState = reduceApp(state, action)

  return state
}
