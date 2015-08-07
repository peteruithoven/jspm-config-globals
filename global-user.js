console.log('user: SOME_GLOBAL: ', SOME_GLOBAL);
console.log('user: SOME_GLOBAL.foo: ', SOME_GLOBAL.foo);

SOME_GLOBAL.globalUser = function () {
  console.log('user: SOME_GLOBAL.globalUser created');
};

SOME_GLOBAL.globalUser.prototype.foo = function () {
  return 'globalUser:bar';
};
