var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');

var app = express();

require('dotenv').config()
require('./config/database');

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));


  /*--- Spot for api routes ---*/
app.use('/api/users', require('./routes/api/users'));

  /*--- Spot for catch all route ---*/
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});