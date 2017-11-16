const express = require('express')
const app = express();
const port = 8000;

app.use(express.static('public'));

app.listen(port)

app.get('/api', function(req, res) {
  res.send('api working');

})
