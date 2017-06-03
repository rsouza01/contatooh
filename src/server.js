// server.js

const util = require('util')

var http = require('http');
var express = require('express');
var app = require('./config/express')();

var config = require('./config/config')();

require('./config/passport')();
require('./config/database')(config.db);

http.createServer(app).listen(config.port, config.address,

	function(){

		console.log('\n\n************** CONTATOOH! Application **************\n\n');
		console.log('****************************************************\n\n');

		console.log('Express Https Server ' + config.address + ' (' + config.env + ') escutando na porta ' + config.port);
});
