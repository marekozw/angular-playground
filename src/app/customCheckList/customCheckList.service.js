(function () {
	'use strict';

	angular
		.module('ngDevstack.customCheckList')
		.factory('customCheckListService', customCheckListService);

	function customCheckListService () {
		var customList = [
			{ name: 'Element One',   selected: false },
			{ name: 'Element Two',   selected: false },
			{ name: 'Element Three', selected: true  },
			{ name: 'Element Four',  selected: false },
			{ name: 'Element Five',  selected: true  }
		];

		var customListWithoutSelectedAttr = [
			{ name: 'Element One' },
			{ name: 'Element Two' },
			{ name: 'Element Three' },
			{ name: 'Element Four' },
			{ name: 'Element Five' }
		];

		// return customList;
		// Działa też na modelu bez atrybutu "selected".
		// Atrybut zostanie dodany w locie.
		return customListWithoutSelectedAttr;
	}
}());