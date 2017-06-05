// config/database.js

var mongoose = require('mongoose');

module.exports = function(uri) {

	mongoose.connect(uri);

	mongoose.connection.on('connected', function() {
		console.log('Mongoose connected on ' + uri);
	});

	mongoose.connection.on('disconnected', function() {
		console.log('Mongoose disconnected from ' + uri);
	});

	mongoose.connection.on('error', function(erro) {
		console.log('Mongoose connection error: ' + erro);
	});


	process.on('SIGINT', function() {

		mongoose.connection.close(function() {

		console.log('Mongoose disconnected via SIGINT signal.');

		// 0 indica que a finalização ocorreu sem erros
		process.exit(0);

		});
	});

	mongoose.set('debug',true);

}
