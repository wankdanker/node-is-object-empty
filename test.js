var isObjectEmpty = require('./')
    , assert = require('assert');

var dt = new Date();

assert.equal(isObjectEmpty({}), true);
assert.equal(isObjectEmpty({ key : 'val' }), false);
assert.equal(isObjectEmpty(dt), false);
