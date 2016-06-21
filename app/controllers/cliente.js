module.exports = function(app){
	
	var Cliente = app.models.cliente;

	var controller = {};
	
	controller.listaTodos = function(req, res){
		Cliente.find()
		//.select("nome email")
		.exec().then(
			function(clientes){
				res.json(clientes);
			},
			function(erro){
				console.log(erro);
				res.status(500).json(erro);
			}
		);
	};
	
	controller.obtemCliente = function(req, res){
		var _id = req.params.id;
		Cliente.findById(_id).exec().then(
			function(cliente){
				if(!cliente) throw new Error("Cliente não encontrado");
				res.json(cliente);
			},
			function(erro){
				console.log(erro);
				res.status(404).json(erro);
			}
		);
	};
	
	controller.removeCliente = function(req, res){
		var _id = req.params.id;
		Cliente.remove({"_id":_id}).exec().then(
			function(){
				res.end();
			},
			function(erro){
				return console.error(erro);
			}
		);
	};
	
	controller.salvaCliente = function(req, res){
		var _id = req.body._id;
		if(_id){
			// Update
			Cliente.findByIdAndUpdate(_id, req.body).exec().then(
				function(cliente){
					res.json(cliente);
				},
				function(erro){
					console.error(erro);
					res.status(500).json(erro);
				}
			);
		}else{
			// Create
			Cliente.create(req.body).then(
				function(cliente){
					res.status(201).json(cliente);
				},
				function(erro){
					console.log(erro);
					res.status(500).json(erro);
				}
			);
		}
	};

	return controller;
};