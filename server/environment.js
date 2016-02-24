/*globals module,require,console,__dirname,process*/
// core
var path = require('path');

var defaults = {
  NODE_ENV: 'development',
  UI_PORT: 8282,
  API_PORT: 8181,
  API_HOST: 'localhost',
  API_PROTOCOL: 'http',
  MONGO_URI: 'mongodb://localhost/database',
  MONGO_USER: '',
  MONGO_PASSWORD: '',
};

var env = {
  check: function () {
      'use strict';

      var key, keys = [];
    for (key in defaults) {
      if (!process.env[key]) {
        keys.push(key);
      }
    }
    if (keys) {
      console.log('Environment Variables not set');
      for (key in keys) {
          if(keys.hasOwnProperty(key)) {
              key = keys[key];
              console.log(key);
          }
      }
      return false;
    } else {
      return true;
    }
  },

  getMongo: function () {
    var json = {
      uri: env.MONGO_URI,
      options: {
        server: {
          poolSize: env.MONGO_POOL_SIZE,
          socketOptions: {
            keepAlive: 1,
            connectTimeoutMS: env.MONGO_CONNECT_TIMEOUT_MS
          }
        }
      }
    };
    if (env.MONGO_USER && env.MONGO_PASSWORD) {
      json.options.auth = {authdb: 'admin'};
      json.options.user = env.MONGO_USER;
      json.options.pass = env.MONGO_PASSWORD;
    }
    return json;
  }
};

// Check the process.env for overrides
for (var key in defaults) {
  if (process.env[key]) {
    if (typeof env[key] === 'number') {
      env[key] = parseInt(process.env[key]);
    } else if (process.env[key] === 'true') {
      env[key] = true;
    } else if (process.env[key] === 'false') {
      env[key] = false;
    } else {
      env[key] = process.env[key];
    }
  } else {
    env[key] = defaults[key];
  }
}

module.exports = env;