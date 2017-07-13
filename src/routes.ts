/// <reference path="../typings/index.d.ts" />

export default routesConfig;

/** @ngInject */
function routesConfig($routeProvider: any, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $routeProvider
    .when('/acceuil', {
      template: '<gram-accueil></gram-accueil>'
    })
    .when('/detail', {
      template: '<ox-wine-detail></ox-wine-detail>'
    })
	.otherwise({
      redirectTo: '/acceuil'
    });	
};
