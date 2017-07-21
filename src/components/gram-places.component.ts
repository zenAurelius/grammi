/// <reference path="../../typings/index.d.ts" />
declare var require: any

import { IPlacesService } from '../services/places.service.interface';

class PlacesCtrl {

	placesService : IPlacesService;
	places : any;
	parent : any;

	// CONSTRUCTOR *******************************************************************************
	/** @ngInject */
	constructor(placesService: IPlacesService) {
		this.placesService = placesService;
	}
	
	// ON INIT ************************************************************************************
	$onInit() {
		this.placesService.getPlaces()
		.then((places) => {
			console.log(places);
			this.places = places.places;
		})
		.catch(erreur => console.log(erreur));
	}
}


export const GramPlaces: angular.IComponentOptions = {
	controller: PlacesCtrl,
	controllerAs: 'placesCtrl',
	template: require('./gram-places.view.html'),
	require: {parent: '^gramMain'}
};
