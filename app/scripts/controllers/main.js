'use strict';

angular.module('serfuncionalApp')
	.controller('MainCtrl', function ($scope) {

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
	});
