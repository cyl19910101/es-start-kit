var Promise = require ( 'promise-polyfill' );
var setAsap = require ( 'setasap' );

Promise._immediateFn = setAsap;

(function () {
  var g     = Function ( 'return this' ) ();
  g.Promise = g.Promise || Promise;
} ());

require ( 'whatwg-fetch' );
require ( 'nodent-runtime' );