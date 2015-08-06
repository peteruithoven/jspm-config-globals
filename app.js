import globalCreator from './global-creator.js';
console.log('globalCreator: ', globalCreator);
console.log('SOME_GLOBAL: ', SOME_GLOBAL);
console.log('SOME_GLOBAL.foo(): ', SOME_GLOBAL.foo());

import GlobalUser from './global-user.js';
console.log('GlobalUser: ', GlobalUser);
console.log('SOME_GLOBAL.globalUser: ', SOME_GLOBAL.globalUser);
var globalUser = new SOME_GLOBAL.globalUser();
console.log('globalUser.foo(): ', globalUser.foo());
