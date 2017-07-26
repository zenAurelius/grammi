/// <reference path="../../typings/index.d.ts" />

import { IReferentielService } 	from './referentiel.service.interface';

export class ReferentielService implements IReferentielService {
	repoTypes 	: any;
	sourceTypes	: any;

	constructor(  ) {
	}
	
	public initSourceTypes(types) {
		this.sourceTypes = types;
	}
	
	public initRepoTypes(types) {
		this.repoTypes = types;
	}
	
	public getSourceType(id) {
		return this.sourceTypes.find(element => element._id == id)
	}
	
	public getRepoType(id) {
		return this.repoTypes.find(element => element._id == id)
	}
	
	
}