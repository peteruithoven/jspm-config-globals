var SOME_GLOBAL = {};

// browserify support (from three.js)
if ( typeof module === 'object' ) {
	module.exports = SOME_GLOBAL;
}

SOME_GLOBAL.foo = function() {
  return 'bar';
}
