var SOME_GLOBAL = {};

// browserify support
if ( typeof module === 'object' ) {
	module.exports = SOME_GLOBAL;
}

SOME_GLOBAL.foo = function() {
  return 'bar';
}
