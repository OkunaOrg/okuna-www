const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const fs = require('fs');
const path = require('path');

const restoreDatabase = require('./support/restoreDatabase');

chai.use(chaiAsPromised);

let server;

before(async function () {
  server = require('./support/server')();
});

after(function () {
  restoreDatabase();
  server.close();
});

for (const spec of fs.readdirSync(path.resolve(__dirname, 'specs'))) {
  if (spec.match(/\.test\.js$/)) {
    require(path.resolve(__dirname, 'specs', spec));
  }
}
