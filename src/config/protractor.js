// config/protractor.js

exports.config = {

	specs: ['../test/e2e/**/*Spec.js'],

	onPrepare: function () {

		//'onPrepare' => é executado apenas uma vez antes dos testes
		//Aqui usamos  o 'browser.driver' pois a pagina do GitHub não é feita em AngularJS
		browser.driver.get('http://localhost:3000');
		browser.driver.findElement(by.id('entrar')).click();
		browser.driver.findElement(by.id('login_field')).sendKeys(config.seleniumUser);
		browser.driver.findElement(by.id('password')).sendKeys(config.seleniumUserPassword);
		browser.driver.findElement(by.name('commit')).click();
	}
};
