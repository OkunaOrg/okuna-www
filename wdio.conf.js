exports.config = {
  specs: [
    './integration/setup.js'
  ],

  maxInstances: 10,

  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome'
  }],

  sync: true,

  coloredLogs: true,

  bail: 0,

  screenshotPath: './integration/screenshots',

  baseUrl: 'http://localhost:5000/',

  waitforTimeout: 10000,

  connectionRetryTimeout: 90000,

  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    timeout: 20000
  },

  reporters: [ 'spec' ]
};
