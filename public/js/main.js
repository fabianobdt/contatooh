angular.module('contatooh', ['ngRoute', 'ngResource'])
.config(function($routeProvider){
	$routeProvider.when('/contatos',{
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	});
	$routeProvider.when('/contato',{
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});
	$routeProvider.when('/contato/:contatoId',{
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	});
	
	$routeProvider.when('/clientes',{
		templateUrl: 'partials/clientes.html',
		controller: 'ClientesController'
	});
	$routeProvider.when('/cliente',{
		templateUrl: 'partials/cliente.html',
		controller: 'ClienteController'
	});
	$routeProvider.when('/cliente/:clienteId',{
		templateUrl: 'partials/cliente.html',
		controller: 'ClienteController'
	});
	
	$routeProvider.when('/home',{
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	});
	
	$routeProvider.otherwise({redirectTo: '/home'});
});