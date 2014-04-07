'use strict';

angular.module('serfuncionalApp')
	.controller('ServicesCtrl', function ($scope, $location) {

	$scope.currentPage = $location.url();

	$scope.getInclude = function (service) {
		return 'views/' + service.content + '';
	};

});
