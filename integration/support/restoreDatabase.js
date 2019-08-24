const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, '..', 'store');

function restore(key) {
  const db = path.join(storePath, key);
  return fs.writeFileSync(db, '[]', { encoding: 'utf8' });
}

module.exports = function () {
  fs.readdirSync(storePath).forEach(db => restore(db));
};
