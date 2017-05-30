// config/passport.js

var passport = require('passport');
var mongoose = require('mongoose');


var GitHubStrategy = require('passport-github').Strategy;

module.exports = function() {

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
			clientID: 'SEU CLIENT ID',
			clientSecret: 'SEU CLIENT PASSWORD',
			callbackURL: 'SUA REDIRECT_URI'
		},
		function(accessToken, refreshToken, profile, done) {

			Usuario.findOrCreate(
				{ "login" : profile.username},
				{ "nome" : profile.username},
				function(erro, usuario) {
					if(erro) {
						console.log(erro);
						return done(erro);
					}

					return done(null, usuario);
				}
			);
		}
	));

	/*
	Chamado apenas UMA vez e recebe o usuário do nosso
	banco disponibilizado pelo callback da estratégia de
	autenticação. Realizará a serialização apenas do
	ObjectId do usuário na sessão.
	*/
	passport.serializeUser(function(usuario, done) {
		done(null, usuario._id);
	});

	// Recebe o ObjectId do usuário armazenado na sessão
	// Chamado a CADA requisição
	passport.deserializeUser(function(id, done) {

		Usuario.findById(id).exec()
		.then(function(usuario) {
			done(null, usuario);
		});
	});

};