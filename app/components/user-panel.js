const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const Ficon = require('./ficon')

module.exports = NewComponent

inherits(NewComponent, Component)
function NewComponent () { Component.call(this) }

NewComponent.prototype.render = function () {
  const props = this.props
  const address = props.address

  return (
    h('.flex-column.user-panel', {
      style: {
      }
    }, [
      h(Ficon, {
        address: address,
      }),
      h('.user-address', `${address}`),
    ])
  )
}
