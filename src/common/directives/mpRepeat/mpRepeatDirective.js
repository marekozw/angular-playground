angular.module('ngDevstact.mpRepeatModule', [])

.directive('mpRepeat', function () {
	'use strict';

	return {
		restrict: 'A',
		scope: {},
		compile: function (tElem, tAttrs, tLink) {
			var count = tAttrs.mpRepeat;
			var pureCopy = angular.element(tElem[0].outerHTML);
			console.log('L', pureCopy.html());

			
			return function (scope, element) {
				
			};
		}
	};
});