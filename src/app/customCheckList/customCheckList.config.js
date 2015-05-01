(function () {
	'use strict';

	angular
		.module('ngDevstack.customCheckList')
		.config(customCheckListConfig);

	customCheckListConfig.$inject = ['$stateProvider'];

	function customCheckListConfig ($stateProvider) {
		var contentState = {
			name: 'customCheckList',
			url: '/customCheckList',
			templateUrl: 'customCheckList/customCheckList.tpl.html',
			controller: 'CustomCheckListController as customCheckList',
			data: {
				pageTitle: 'Custom Check List'
			}
		};

		$stateProvider.state(contentState);
	}
}());