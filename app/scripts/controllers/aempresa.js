'use strict';

angular.module('serfuncionalApp')
	.controller('AEmpresaCtrl', function ($scope, $timeout, $rootScope) {
		$('#galleryPhoto').galleryView({
			panel_width: 500,
			pan_images: false,
			panel_animation: 'crossfade'
		});
	});
