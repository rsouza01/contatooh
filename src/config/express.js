// config/express.js

var express = require('express');
var home = require('../app/routes/home');

module.exports = function() {

	var app = express();

	// variável de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));

	// EJS Templates (http://embeddedjs.com)
	app.set('view engine', 'ejs');
	app.set('views','./app/views');

	home(app);


	return app;
};
