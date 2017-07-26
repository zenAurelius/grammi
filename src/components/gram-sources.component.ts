/// <reference path="../../typings/index.d.ts" />
declare var require: any

import { ISourcesService } from '../services/sources.service.interface';

class SourcesCtrl {

	sourcesService : ISourcesService;
	sources : any;
	parent : any;

	// CONSTRUCTOR *******************************************************************************
	/** @ngInject */
	constructor(sourcesService: ISourcesService) {
		this.sourcesService = sourcesService;
	}
	
	// ON INIT ************************************************************************************
	$onInit() {
		this.sourcesService.getFullSources()
		.then((sources) => {
			this.sources = sources;
			//this.setLabel(this.sources);
			console.log(this.sources);
		})
		.catch(erreur => console.log(erreur));
	}
	
	private setLabel(sources) {
		if(sources) {
			sources.forEach(e => {
				e.setLabel(this.parent);
			});
		}
	}
}


export const GramSources: angular.IComponentOptions = {
	controller: SourcesCtrl,
	controllerAs: 'sourcesCtrl',
	template: require('./gram-sources.view.html'),
	require: {parent: '^gramMain'}
};
