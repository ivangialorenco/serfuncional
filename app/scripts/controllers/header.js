'use strict';

angular.module('serfuncionalApp')
	.controller('HeaderCtrl', function ($scope, $rootScope, $location) {
		$rootScope.services = [
			{
				name : 'Fisioterapia',
				url : '/servicos?pagina=fisioterapia',
				content : 'fisioterapia.html'
			},
			{
				name : 'Hidroterapia',
				url : '/servicos?pagina=hidroterapia',
				content : 'hidroterapia.html'
			},
			{
				name : 'Pilates',
				url : '/servicos?pagina=pilates',
				content : 'pilates.html'
			},
			{
				name : 'RPG',
				url : '/servicos?pagina=rpg',
				content : 'rpg.html'
			},
			{
				name : 'Massagem Estética',
				url : '/servicos?pagina=massagem-estetica',
				content : 'massagem-estetica.html'
			},
			{
				name : 'Drenagem Linfática',
				url : '/servicos?pagina=drenagem-linfatica',
				content : 'drenagem-linfatica.html'
			},
			{
				name : 'Massagem Relaxante',
				url : '/servicos?pagina=massagem-relaxante',
				content : 'massagem-relaxante.html'
			}
		];

		$scope.menu = [
			{
				name : 'Home',
				url : '/'
			},
			{
				name : 'A Empresa',
				url : '/aempresa'
			},
			{
				name : 'Serviços',
				url : '/servicos',
				submenu : $rootScope.services
			},
			{
				name : 'Equipe',
				url : '/equipe'
			},
			{
				name : 'Depoimentos',
				url : '/depoimentos'
			},
			{
				name : 'Contato',
				url : '/contato'
			}
		];

		$scope.menuClass = function(page) {
			var current = $location.path();

			if (page === current) {
				return 'active';
			} else {
				return '';
			}
		};
	});
