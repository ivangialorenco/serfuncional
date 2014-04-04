'use strict';

angular.module('serfuncionalApp')
	.controller('ServicesCtrl', function ($scope) {

		$scope.images = [
			{
				url : 'http://blog.shopfisio.com.br/wp-content/uploads/2013/06/terapiamanuale1.jpg',
				left : '0px',
				top : '0px'
			},
			{
				url : 'http://www.clinicaciclos.com.br/upload/revista-pilates-ataxia1.jpg',
				left : '0px',
				top : '0px'
			},
			{
				url : 'http://bellavidasaudeebemestar.com.br/wp-content/uploads/2011/05/iStock_000005718166Medium.jpg',
				left : '0px',
				top : '0px'
			},
			{
				url : 'http://www.rafinhagadelha.com.br/wp-content/uploads/2013/07/pilates2.jpg',
				left : '0px',
				top : '0px'
			}
		];

		$scope.services = [
			{
				name : 'Fisioterapia',
				url : 'fisioterapia'
			},
			{
				name : 'Hidroterapia',
				url : 'hidroterapia'
			},
			{
				name : 'Pilates',
				url : 'pilates'
			},
			{
				name : 'RPG',
				url : 'rpg'
			},
			{
				name : 'Massagem Estética',
				url : 'massagem-estetica'
			},
			{
				name : 'Drenagem Linfática',
				url : 'drenagem-linfatica'
			},
			{
				name : 'Massagem Relaxante',
				url : 'massagem-relaxante'
			}
		];
	});
