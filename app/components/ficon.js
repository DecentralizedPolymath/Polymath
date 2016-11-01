const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const ethUtil = require('ethereumjs-util')
const numberfiy = require('../scripts/util').numberfiy
module.exports = Ficon

inherits(Ficon, Component)
function Ficon () { Component.call(this) }

Ficon.prototype.render = function () {
  var props = this.props
  const address = props.address
  const numberfiyAddress = numberfiy(ethUtil.stripHexPrefix(address)).map((l) => {
    return parseInt(l) * 5 + 20
  })
  const addressBuffer = ethUtil.toBuffer(address)
  return (
    h('div', {}, [
      h('svg', {
        width: '120',
        height: '120',
      }, [
        h('circle', {
          cx: '60',
          cy: '60',
          r: '60',
        }),
        h('polyline', {
          fill: 'none',
          points: numberfiyAddress.join(','),
          stroke: 'white',
        }),
      ]),
    ])
      h('svg', {
        width: '160',
        height: '200',
        style: {
          // position: 'ab'
        },
      }),
    ])
  )
}

Ficon.prototype.renderDots = function (arr) {
  var grouping = []
  var x, y
  for (var cord = 0; cord <= arr.length; cord+=2) {
    x = arr[cord]
    y = arr[cord++]
    grouping.push(
      h('circle', {
        cx: x,
        cy: y,
        r:'5',
        fill: 'black'
    }))
  }
  return grouping
}
