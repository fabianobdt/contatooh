// Removido devido ao express-load
//var controller = require('../controllers/home')();

module.exports = function(app){

	// Adicionado devido ao express-load
	var controller = app.controllers.home;

	app.get('/', controller.index);
	app.get('/index', controller.index);
	app.get('/novo', controller.novo);
};