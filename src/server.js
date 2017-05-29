// server.js

var http = require('http');

var app = require('./config/express')();

var mongodb = require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Contatooh listening on port ' + app.get('port'));
});
