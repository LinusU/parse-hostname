const fs = require('fs')
const data = new Set(fs.readFileSync('data.txt').toString().trim().split('|'))

module.exports = function parse (hostname) {
  let breakPoints = [-1]
  let nextDotIdx = hostname.indexOf('.')

  while (nextDotIdx !== -1) {
    breakPoints.push(nextDotIdx)
    nextDotIdx = hostname.indexOf('.', nextDotIdx + 1)
  }

  breakPoints.push(hostname.length)

  function getRange (start, end) {
    return (start === end) ? '' : hostname.slice(breakPoints[start] + 1, breakPoints[end])
  }

  for (let i = 0; i < breakPoints.length; i++) {
    const rest = getRange(i, breakPoints.length - 1)

    if (data.has('!' + rest)) {
      return [getRange(0, i), getRange(i, i + 1), getRange(i + 1)]
    }

    if (data.has('*.' + rest)) {
      return [getRange(0, i - 2), getRange(i - 2, i - 1), getRange(i - 1)]
    }

    if (data.has(rest)) {
      return [getRange(0, i - 1), getRange(i - 1, i), rest]
    }
  }
}
