/// <reference path="../../typings/index.d.ts" />
declare var require: any

import { ISourcesService } from '../services/sources.service.interface';
import { IReferentielService } from '../services/referentiel.service.interface';

class MainCtrl {
	$location: 				ng.ILocationService;
	sourcesService : 		ISourcesService;
	referentielService : 	IReferentielService
	typePlaces : 			any;
	typeRepo :				any;
	typeSource :			any;
	
	/** @ngInject */
	constructor($location: ng.ILocationService, sourcesService: ISourcesService, referentielService: IReferentielService) {
		this.$location = $location;
		this.sourcesService = sourcesService;
		this.referentielService = referentielService;
	}
	
	// ON INIT ************************************************************************************
	$onInit() {
		this.sourcesService.getSourceTypes()
		.then( r => this.referentielService.initSourceTypes(r) );
		
		this.sourcesService.getRepoTypes()
		.then( r => this.referentielService.initRepoTypes(r) );
	}
	
	public getSourceType = function(id) {
		return this.typeSource.find(element => element._id == id)
	}
	
	public getRepoType = function(id) {
		return this.typeRepo.find(element => element._id == id)
	}
	
	public goPlaces = function() { this.$location.path('/places'); }
	public goSources = function() { this.$location.path('/sources'); }
}

export const GramMain: angular.IComponentOptions = {
	controller: MainCtrl,
	controllerAs: 'mainCtrl',
	template: require('./gram-main.view.html')
};
