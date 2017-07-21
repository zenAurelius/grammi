/// <reference path="../../typings/index.d.ts" />
declare var require: any

import { ISourcesService } from '../services/sources.service.interface';

class MainCtrl {
	$location: 			ng.ILocationService;
	sourcesService : 	ISourcesService;
	typePlaces : 		any;
	typeRepo :			any;
	typeSource :		any;
	
	/** @ngInject */
	constructor($location: ng.ILocationService, sourcesService: ISourcesService) {
		this.$location = $location;
		this.sourcesService = sourcesService;
	}
	
	// ON INIT ************************************************************************************
	$onInit() {
		this.sourcesService.getSourceTypes()
		.then( r => this.typeSource = r);
	}
	
	public getSourceType = function(id) {
		return this.typeSource.find(element => element._id == id)
	}
	
	public goPlaces = function() { this.$location.path('/places'); }
	public goSources = function() { this.$location.path('/sources'); }
}

export const GramMain: angular.IComponentOptions = {
	controller: MainCtrl,
	controllerAs: 'mainCtrl',
	template: require('./gram-main.view.html')
};
