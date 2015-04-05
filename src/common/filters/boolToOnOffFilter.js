(function () {
	'use strict';

	var boolToOnOffFilter = function () {
		return function (value) {
			return value ? 'on' : 'off';
		};
	};

	angular.module('ngDevstack')
		.filter('boolToOnOff', boolToOnOffFilter);

} (angular));
