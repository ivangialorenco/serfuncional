'use strict';

angular.module('serfuncionalApp')
	.controller('HeaderCtrl', function ($scope, $rootScope, $location) {
		$rootScope.services = [
			{
				name : 'Drenagem Linfática Manual',
				url : '/servicos?pagina=drenagem-linfatica',
				content : 'drenagem-linfatica.html'
			},
			{
				name : 'Estética Corporal',
				url : '/servicos?pagina=estetica-corporal',
				content : 'estetica-corporal.html'
			},
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
				name : 'Kinesio Tape',
				url : '/servicos?pagina=kinesio',
				content : 'kinesio.html'
			},
			{
				name : 'Massagem Relaxante/Terapêutica',
				url : '/servicos?pagina=massagem-relaxante',
				content : 'massagem-relaxante.html'
			},
			{
				name : 'Nutrição',
				url : '/servicos?pagina=nutricao',
				content : 'nutricao.html'
			},
			{
				name : 'Pilates',
				url : '/servicos?pagina=pilates',
				content : 'pilates.html'
			},
			{
				name : 'RPG/RPM',
				url : '/servicos?pagina=rpg',
				content : 'rpg.html'
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
