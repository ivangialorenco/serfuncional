'use strict';

angular
	.module('serfuncionalApp', [
		'ngCookies',
		'ngResource',
		'ngSanitize',
		'ngRoute',
		'ui.bootstrap'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/servicos', {
				templateUrl: 'views/services.html',
				controller: 'ServicesCtrl'
			})
			.when('/aempresa', {
				templateUrl: 'views/aempresa.html',
				controller: 'MainCtrl'
			})
			.when('/equipe', {
				templateUrl: 'views/equipe.html',
				controller: 'MainCtrl'
			})
			.when('/depoimentos', {
				templateUrl: 'views/depoimentos.html',
				controller: 'MainCtrl'
			})
			.when('/contato', {
				templateUrl: 'views/contato.html',
				controller: 'MainCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
