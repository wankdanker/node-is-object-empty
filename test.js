var isObjectEmpty = require('./')
    , assert = require('assert');

assert.equal(isObjectEmpty({}), true);
assert.equal(isObjectEmpty({ key : 'val' }), false);
assert.equal(isObjectEmpty(new Date()), false);
assert.equal(isObjectEmpty(new String('hello')), false);
assert.equal(isObjectEmpty(new Number(1)), false);
