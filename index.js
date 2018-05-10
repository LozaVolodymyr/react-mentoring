const express = require('express');
const app = express();
const routes = require('./routes');

app.set('port', 3000);
app.use(express.static('dist'));
app.use('/', routes);

const server = require('http').createServer(app);

server.listen(app.get('port'), function () {
  console.log(`Node app is running on port ${app.get('port')}`);
})
