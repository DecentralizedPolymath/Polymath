var actions = {
  checkForWeb3: checkForWeb3,
  NO_WEB3: 'NO_WEB3',
  showAccountDashboard: showAccountDashboard,
  SHOW_ACCOUNT_PAGE: 'SHOW_ACCOUNT_DASHBOARD',

}

module.exports = actions

function checkForWeb3 () {
  return (dispatch) => {
    try {
      address = web3.eth.accounts[0]
      dispatch(actions.showAccountDashboard(address))
    } catch (e) {
      dispatch({
        type: 'NO_WEB3',
        message: `It Does not seem like you have MetaMask downloaded.
        Please go download MetaMask to use Polymath`
      })
    }
  }
}

function showAccountDashboard (address) {
  return {
    type: 'SHOW_ACCOUNT_DASHBOARD',
    address,
  }
}
