# Parse Hostname

Parse a hostname into three parts: subdomain, domain and public suffix.

## Installation

```sh
npm install --save parse-hostname
```

## Usage

```js
const parseHostname = require('parse-hostname')

console.log(parseHostname('www.google.com'))
//=> ['www', 'google', 'com']

console.log(parseHostname('mail.linusu.co.uk'))
//=> ['mail', 'linusu', 'co.uk']

console.log(parseHostname('example.se.eu.org'))
//=> ['', 'example', 'se.eu.org']
```
