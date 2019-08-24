const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

module.exports = function () {
  app.use(bodyParser.json());

  app.post('/waitlist/subscribe', (req, res) => {
    const { email } = req.body;
    const list = fs.readFileSync(path.join(__dirname, '..', 'store', 'subscribers.json'), { encoding: 'utf8' });
    const json = Array.from(JSON.parse(list));
    json.push(email);
  
    fs.writeFileSync(path.join(__dirname, '..', 'store', 'subscribers.json'), JSON.stringify(json), { encoding: 'utf8' });
  
    return res.json({
      count: json.length - 1
    });
  });
  
  app.use(express.static(path.resolve(__dirname, '..', '..', 'dist')));

  return app.listen(5000, function () {
    console.log(`Server listening on port 5000`);
  });  
};
