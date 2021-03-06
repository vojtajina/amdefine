if (typeof define !== 'function') { var define = require('../../amdefine')(module) }

define('sub/nested/d', function (require, exports, module) {
    var c = require('../c'),
        e = require('./e');

    return {
        name: 'd',
        e: e,
        cName: c.name
    };
});


define('sub/nested/e', function (require, exports) {
    exports.name = 'e';
});

define('b', {
    name: 'b'
});

define('sub/c', function (require, exports, module) {

    //A fake out, modify the exports, but still prefer the
    //return value as the module value.
    exports.name = 'badc';

    return {
        name: 'c'
    };
});

define('lib', ['./b', './sub/nested/d'], function (b, d) {
    return {
        name: 'lib',
        b: b,
        d: d
    };
});

module.exports = define.require('lib');
