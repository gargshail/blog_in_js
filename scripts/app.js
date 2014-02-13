'use strict';

/* App Module */

var app = angular.module('mysite', ['ui.bootstrap', 'ngRoute', 'ngSanitize']);

app.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
	      when('/md/:docid', {templateUrl: 'partials/md.html',   controller: "MDCtrl"}).
	      when('/netsec', {templateUrl: 'partials/netsec.html',   controller: "FilterCtrl"}).
	      when('/ee', {templateUrl: 'partials/ee.html',   controller: "FilterCtrl"}).
	      when('/bookshelf', {templateUrl: 'partials/bookshelf.html',   controller: "FilterCtrl"}).
	      otherwise({redirectTo: '/'});
	}]);
