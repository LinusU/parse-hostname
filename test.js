const assert = require('assert')
const parseHostname = require('./')

const testCases = [
  // com
  ['example.com', ['', 'example', 'com']],
  ['www.example.com', ['www', 'example', 'com']],
  ['mail.example.com', ['mail', 'example', 'com']],

  // *.ck
  // !www.ck
  ['www.ck', ['', 'www', 'ck']],
  ['a.www.ck', ['a', 'www', 'ck']],
  ['a.b.www.ck', ['a.b', 'www', 'ck']],
  ['a.b.c.www.ck', ['a.b.c', 'www', 'ck']],
  ['example.co.ck', ['', 'example', 'co.ck']],
  ['a.example.co.ck', ['a', 'example', 'co.ck']],
  ['a.b.example.co.ck', ['a.b', 'example', 'co.ck']],
  ['a.b.c.example.co.ck', ['a.b.c', 'example', 'co.ck']],

  // cd
  // gov.cd
  ['example.cd', ['', 'example', 'cd']],
  ['a.example.cd', ['a', 'example', 'cd']],
  ['a.b.example.cd', ['a.b', 'example', 'cd']],
  ['a.b.c.example.cd', ['a.b.c', 'example', 'cd']],
  ['example.gov.cd', ['', 'example', 'gov.cd']],
  ['a.example.gov.cd', ['a', 'example', 'gov.cd']],
  ['a.b.example.gov.cd', ['a.b', 'example', 'gov.cd']],
  ['a.b.c.example.gov.cd', ['a.b.c', 'example', 'gov.cd']],

  // *.fj
  ['a.example.fj', ['', 'a', 'example.fj']],
  ['a.b.example.fj', ['a', 'b', 'example.fj']],
  ['a.b.c.example.fj', ['a.b', 'c', 'example.fj']],

  // *.elb.amazonaws.com
  ['a.example.elb.amazonaws.com', ['', 'a', 'example.elb.amazonaws.com']],
  ['a.b.example.elb.amazonaws.com', ['a', 'b', 'example.elb.amazonaws.com']],
  ['a.b.c.example.elb.amazonaws.com', ['a.b', 'c', 'example.elb.amazonaws.com']],

  // s3.amazonaws.com
  ['example.s3.amazonaws.com', ['', 'example', 's3.amazonaws.com']]
]

for (const [input, expected] of testCases) {
  const actual = parseHostname(input)

  assert.deepStrictEqual(actual, expected)
}
