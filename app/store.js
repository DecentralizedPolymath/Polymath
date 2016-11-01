const {
  createStore,
  applyMiddleware
} = require('redux')
// const thunkMiddleware = require('redux-thunk')
const rootReducer = require('./reducers')
// const createLogger = require('redux-logger')

module.exports = configureStore

function configureStore (initialState) {
  return createStore(rootReducer, initialState)
}
