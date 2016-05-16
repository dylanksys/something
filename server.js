var express = require ('express');

var home = require('./home');
var data = require('./data');

var app = express();

app.use('/', home);
app.use('/api', data);

app.listen(1337, function () {
	console.log('something listening on port 1337');
};
