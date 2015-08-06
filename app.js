import SOME_GLOBAL from './global-creator.js';
console.log('SOME_GLOBAL: ', SOME_GLOBAL);
console.log('SOME_GLOBAL.foo: ', SOME_GLOBAL.foo);

// the following fails because SOME_GLOBAL can't be found
import GlobalUser from './global-user.js';
console.log('GlobalUser: ', GlobalUser);
console.log('SOME_GLOBAL.globalUser: ', SOME_GLOBAL.globalUser);
var globalUser = new SOME_GLOBAL.globalUser();
console.log('globalUser.foo: ', globalUser.foo);
