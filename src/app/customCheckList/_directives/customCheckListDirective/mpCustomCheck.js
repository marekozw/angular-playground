(function () {
	'use strict';

	angular
		.module('ngDevstack.customCheckList')
		.directive('mpCustomCheck', customCheck);

	function customCheck () {
		return {
			restrict: 'A',
			transclude: true,
			require: 'ngModel',
			templateUrl: 'customCheckList/_directives/customCheckListDirective/customCheckListDirective.tpl.html',
			link: customCheckLink
		};
	}

	function customCheckLink (scope, element, attrs, ngModel) {
		function onElementClick () {
			scope.isSelected = !ngModel.$modelValue; // Pobiera aktualny model
			ngModel.$setViewValue(scope.isSelected); // Ustawia model na zewnątrz dyrektywy
		}

		scope.onElementClick = onElementClick;
		
		// Uruchomi sie za każdym razem gdy model się zmieni.
		// Lepsze od scope.$watch(isSelected, f); oraz od 2-way-DB
		ngModel.$render = function () {
			scope.isSelected = ngModel.$modelValue;
		};
	}
}());