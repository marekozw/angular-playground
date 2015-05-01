(function () {
	'use strict';

	angular
		.module('ngDevstack.customCheckList')
		.controller('CustomCheckListController', CustomCheckListController);

	CustomCheckListController.$inject = ['$timeout', 'customCheckListService'];

	function CustomCheckListController ($timeout, customCheckListService) {
		var customCheckList = this;
		customCheckList.elementList = customCheckListService;
	
		customCheckList.confirm = function () {
			customCheckList.confirmedEls = customCheckList.elementList;
		};
	}
}());