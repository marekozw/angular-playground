'use strict';

angular.module('ngDevstack.home')

.controller('HomeCtrl', function () {
	this.isActive = false;

	this.toggleActive = function () {
		this.isActive = !this.isActive;
	};
});
