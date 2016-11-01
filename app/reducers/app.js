const extend = require('xtend')
const actions = require('../actions')

module.exports = reduceApp

function reduceApp (state, action) {
  var appState = {}

  try {
    address = web3.eth.accounts[0]
    appState = {
      currentView: {
        name: 'accountDashboard',
      },
      address
    }
  } catch (e) {
    appState = {
      currentView: {
        name: 'noWeb3',
      },
      message: `It Does not seem like you have MetaMask downloaded.
      Please go download MetaMask to use Polymath`,
    }
  }

  switch (action.type) {

    case 'SHOW_ACCOUNT_DASHBOARD':
      return extend(appState, {
        currentView: {
          name: 'accountDashboard',
        },
      })

    default:
      return appState
  }
}
