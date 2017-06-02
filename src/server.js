// server.js

const util = require('util')

var http = require('http');
var express = require('express');
var app = require('./config/express')();

require('./config/passport')();
/** Cloud9 */
//require('./config/database.js')('mongodb://' + process.env.IP +'/contatooh');

/** Local */
require('./config/database.js')('mongodb://localhost/contatooh');


http.createServer(app).listen(process.env.PORT, process.env.IP, function(){
	console.log('Contatooh listening on port ' + app.get('port'));
});
