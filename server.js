var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var logger = require('morgan');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port);