// server.js

const util = require('util')

var http = require('http');
var express = require('express');
var app = require('./config/express')();

var CONFIG = require('./config/ambient');


require('./config/passport')();
require('./config/database.js')('mongodb://' + CONFIG.dbAddress +'/contatooh');


http.createServer(app).listen(CONFIG.hostPort, CONFIG.hostAddress, function(){
	console.log('Contatooh listening on port ' + CONFIG.hostPort);
});
