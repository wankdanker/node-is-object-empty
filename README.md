is-object-empty
---------------

[![Build Status](https://travis-ci.org/wankdanker/node-is-object-empty.svg)](https://travis-ci.org/wankdanker/node-is-object-empty)

Check to see if an object is empty (has no keys)

[jsperf](http://jsperf.com/check-if-object-is-empty)

install
-------

```bash
npm install is-object-empty
```

usage
-----

```js
var isObjectEmpty = require('is-object-empty');

var obj = {};

if (isObjectEmpty(obj)) {
    console.log('yup, it is empty');
}
else {
    console.log('nope, it is not empty');
}
```

license
-------

MIT

