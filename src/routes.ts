/// <reference path="../typings/index.d.ts" />

export default routesConfig;

/** @ngInject */
function routesConfig($routeProvider: any, $locationProvider: angular.ILocationProvider) {
  //$locationProvider.html5Mode(true).hashPrefix('!');
  $routeProvider
    .when('/acceuil', {
      template: '<gram-accueil></gram-accueil>'
    })
	.when('/places', {
		template: '<gram-places></gram-places>'
	})
	.when('/sources', {
		template: '<gram-sources></gram-sources>'
	})
    .otherwise({
      redirectTo: '/acceuil'
    });	
};
