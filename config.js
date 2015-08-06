System.config({
  "baseURL": "/",
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.20",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "core-js": "npm:core-js@0.9.18",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});

System.config({
  packages: {
    './global-user.js': {
      globals: {
        'SOME_GLOBAL': './global-creator.js'
      },
      meta: {
        deps: [
          './global-creator.js'
        ]
      }
    },
    '*app.js': {
      name: 'app customname',
      format: 'esm',
      defaultExtension: '.js',
      globals: {
        'SOME_GLOBAL': './global-creator.js'
      },
      meta: {
        deps: [
          './global-creator.js'
        ]
      }
    }
  }
});
