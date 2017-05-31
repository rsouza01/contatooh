// server.js

const util = require('util')

var http = require('http');
var express = require('express');
var app = require('./config/express')();

require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');


http.createServer(app).listen(app.get('port'), function(){
	console.log('Contatooh listening on port ' + app.get('port'));
});
