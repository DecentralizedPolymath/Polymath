const extend = require('xtend')
const actions = require('../actions')

module.exports = reduceApp

function reduceApp (state, action) {
  var defaultView = {}
  try {
    address = web3.eth.accounts[0]
    defaultView = {
      type: 'SHOW_ACCOUNT_DASHBOARD',
      address
    }
  } catch (e) {
    defaultView = {
      type: 'NO_WEB3',
      message: `It Does not seem like you have MetaMask downloaded.
      Please go download MetaMask to use Polymath`,
    }
  }
}
