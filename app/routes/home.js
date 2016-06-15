var controller = require('../controller/home')();

module.exports = function(app){
	app.get('/index', controller.index);
	app.get('/novo', controller.novo);
};