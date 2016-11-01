const render = require('react-dom').render
const h = require('react-hyperscript')
const Root = require('./root')
const configureStore = require('./store')

// module.exports = startApp

startApp()

// this is the very beginning
function startApp () {
  // start app
  var store = configureStore({
    appState: {},
  })

  const container = document.querySelector('#app-content')
  render(
    h(Root, {store}),
  container)
}
