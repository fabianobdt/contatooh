module.exports = function(){
	var controller = {};
	controller.index = function(req, res){
		res.render('index', {nome: 'Express - dinamico'});
	};
	controller.novo = function(req, res){
		res.send('teste novo');
	};
	
	return controller;
};