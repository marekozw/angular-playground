(function () {
	'use strict';

	angular
		.module('ngDevstack.content')
		.config(contentConfig);

	contentConfig.$inject = ['$stateProvider'];

	function contentConfig ($stateProvider) {
		var contentState = {
			name: 'content',
			url: '/content',
			templateUrl: 'content/content.tpl.html',
			controller: 'ContentController as content',
			data: {
				pageTitle: 'Content'
			}
		};

		$stateProvider.state(contentState);
	}
}());