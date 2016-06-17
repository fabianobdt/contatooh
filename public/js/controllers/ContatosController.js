angular.module('contatooh').controller('ContatosController',
function($scope, Contato){ // Substituido $resources pelo factory Contato
	$scope.contatos = [];
	
	$scope.mensagem = {texto: ''};

	$scope.filtro = '';

	// Substituido $resources pelo factory Contato
	//var Contato = $resource('/contatos/:id');


	function buscaContatos(){
		Contato.query(
			function(contatos){
				$scope.contatos = contatos;
			},
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível obter a lista de contatos.'
				};
			}
		);
	}
	buscaContatos();

	$scope.remove = function(contato){
		//console.log(contato);
		Contato.delete({id: contato._id}, 
			buscaContatos, 
			function(erro){
				console.log(erro);
				$scope.mensagem = {
					texto: 'Não foi possível remover o contato.'
				};
			}
		);
	};


});