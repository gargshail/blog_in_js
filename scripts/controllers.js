'use strict';

/* Controllers */

app.controller("MDCtrl", function($scope, $routeParams, $http) {

	$scope.name = "Hello World";
	$http.get('md/' + $routeParams.docid + ".md").success(function(data) {

		$scope.content = marked(data);

	});
}); 


app.controller("ButtonsCtrl",  function ($scope) {
	
	  $scope.radioModel = 'Left';
	
	}
);

app.controller("MainCtrl",  function ($scope, $http) {

	$http.get('json/menu.json').success(function(data) {
			$scope.menu = data;
		});
	}
);

app.controller("FilterCtrl",  function ($scope) {
	// activate menu and filter articles by menu item
	
	}
);