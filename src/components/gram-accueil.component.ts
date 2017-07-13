/// <reference path="../../typings/index.d.ts" />
declare var require: any

import { IPlacesService } from '../services/places.service.interface';

class PlacesCtrl {

	placesService : IPlacesService;
	places : any;

	// CONSTRUCTOR *******************************************************************************
	/** @ngInject */
	constructor(placesService: IPlacesService) {
		this.placesService = placesService;
	}
	
	// ON INIT ************************************************************************************
	$onInit() {
		this.placesService.getPlaces().then((places) => {
			console.log(places);
			this.places = places;
		});
	}
}


export const GramAccueil: angular.IComponentOptions = {
	controller: PlacesCtrl,
	template: require('./gram-accueil.view.html')
};
