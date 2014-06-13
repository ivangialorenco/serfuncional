'use strict';

angular.module('serfuncionalApp')
	.controller('MainCtrl', function ($scope) {
		$scope.images = [
			{
				url : 'images/banner/SerFuncional-149.jpg',
				left : '0px',
				top : '0px',
				text : 'Promoção de Saúde e Qualidade de Vida'
			},
			{
				url : 'images/banner/SerFuncional-166.jpg',
				left : '0px',
				top : '0px',
				text : 'Conheça a Ser Funcional'
			},
			{
				url : 'images/banner/SerFuncional-114.jpg',
				left : '0px',
				top : '0px',
				text : '"Realize seu exercício com o mínimo de esforço e o máximo de prazer" Joseph Pilates'
			},
			{
				url : 'images/banner/SerFuncional-201.jpg',
				left : '0px',
				top : '-100px',
				text : 'Atendimentos individuais e personalizados'
			}
		];
	});