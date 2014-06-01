'use strict';

angular.module('serfuncionalApp')
	.controller('ServicesCtrl', function ($scope, $rootScope, $location) {

	$scope.currentPage = $location.url();

	$scope.getInclude = function (service) {
		$rootScope.showGallery();
		return 'views/' + service.content + '';
	};

});
