
module.exports = {
  numberfiy: numberfiy
}

function numberfiy (hex) {
  // a-f 10-15
  hex = hex.toLowerCase().split('').map((l) => {
    switch (l) {
      case 'a':
        return '10'
      case 'b':
        return '11'
      case 'c':
        return '12'
      case 'd':
        return '13'
      case 'e':
        return '14'
      case 'f':
        return '15'
      default:
        return l
    }
  })

  return hex
}
