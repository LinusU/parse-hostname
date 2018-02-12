const fs = require('fs')
const got = require('got')

function notComment (line) {
  return !line.startsWith('//')
}

async function main () {
  const response = await got('https://publicsuffix.org/list/public_suffix_list.dat')
  const data = response.body.split('\n').filter(Boolean).filter(notComment).join('|')

  fs.writeFileSync('data.txt', data)
}

main().catch((err) => {
  process.exitCode = 1
  console.error(err.stack)
})
