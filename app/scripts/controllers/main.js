'use strict';

angular.module('serfuncionalApp')
	.controller('MainCtrl', function ($scope) {
		$scope.images = [
			{
				url : 'images/pictures/banner/SerFuncional-149.jpg',
				left : '0px',
				top : '-400px',
				text : 'Promoção de Saúde e Qualidade de Vida'
			},
			{
				url : 'images/pictures/banner/SerFuncional-166.jpg',
				left : '0px',
				top : '-400px',
				text : 'Conheça a Ser Funcional'
			},
			{
				url : 'images/pictures/banner/SerFuncional-114.jpg',
				left : '0px',
				top : '-180px',
				text : '"Realize seu exercício com o mínimo de esforço e o máximo de prazer" Joseph Pilates'
			},
			{
				url : 'images/pictures/banner/SerFuncional-201.jpg',
				left : '0px',
				top : '-500px',
				text : 'Atendimentos individuais e personalizados'
			}
		];
	});
