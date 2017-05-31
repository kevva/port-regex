# port-regex [![Build Status](https://travis-ci.org/kevva/port-regex.svg?branch=master)](https://travis-ci.org/kevva/port-regex)

> Regular expression for matching ports


## Install

```
$ npm install --save port-regex
```


## Usage

```js
const portRegex = require('port-regex');

portRegex().test('http://github.com:80');
//=> true

portRegex().test('127:0.0.1:3000');
//=> true

portRegex({exact: true}).test('http://github.com:80');
//=> false

portRegex({exact: true}).test(':3000');
//=> true

'http://github.com:80 127:0.0.1:3000'.match(portRegex());
//=> [':80', ':3000']
```


## API

### portRegex([options])

#### exact

Type: `boolean`<br>
Default: `false`

Only match an exact string. Useful with RegExp#test to check if a string is a port.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
