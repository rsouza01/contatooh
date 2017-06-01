// config/express.js

var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

var helmet = require('helmet');


module.exports = function() {

	var app = express();

	// vari�vel de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('./public'));

	app.use(cookieParser());
	app.use(session(
		{
			secret: 'homem avestruz',
			resave: true,
			saveUninitialized: true
		}
	));

	app.use(passport.initialize());
	app.use(passport.session());

	app.use(helmet());

	//Esconde a tecnologia
	app.disable('x-powered-by');
	
	//Impede acesso via iphrame
	app.use(helmet.xframe());

	//Filtro XSS
	app.use(helmet.xssFilter());	

	//Impede inferência de Mime Type
	app.use(helmet.nosniff());


	// EJS Templates (http://embeddedjs.com)
	app.set('view engine', 'ejs');
	app.set('views','./app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')())

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes/auth.js')
		.then('routes')
		.into(app);

	app.get('*', function(req, res) {
		res.status(404).render('404');
	});
	
	return app;
};
