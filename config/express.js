var express = require('express');
var rotas = require('../app/routes/home');

//var newrouter = express.Router();

module.exports = function(){
	var app = express();

	// configuracao de ambiente
	app.set('port', 3000);

	// middleware
	app.use(express.static('public'));
	
	// abaixo do moddleware express.static
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	
	rotas(app);

	return app;
};

