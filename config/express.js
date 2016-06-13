var express = require('express');
var home = require('../app/routes/home');

module.exports = function(){
	var app = express();

	// necessario apenas na versao 3.x
	//app.use(app.router);
	
	// configuracao de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('../public'));
	
	// abaixo do moddleware express.static
	app.set('view engine', 'ejs');
	app.set('views', '../app/views');
	
	home(app);

	return app;
};

