// app/config/env/development.js

module.exports = {
	env: 'development',
	address: 'localhost',
	port: 3000,
	db: 'mongodb://localhost/contatooh',
	clientID: process.env.CLIENT_ID,
	clientSecret: process.env.CLIENT_SECRET,
	seleniumUser: process.env.SELENIUM_USER,
	seleniumUserPassword: process.env.SELENIUM_USER_PASSWORD
};
