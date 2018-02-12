const fs = require('fs')
const path = require('path')

const data = fs.readFileSync(path.join(__dirname, 'data.txt')).toString()
const template = fs.readFileSync(path.join(__dirname, 'template.js')).toString()

fs.writeFileSync('index.js', template.replace('INSERT|DATA|HERE', data))
