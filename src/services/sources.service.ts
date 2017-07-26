/// <reference path="../../typings/index.d.ts" />

import { ISourcesService } 		from './sources.service.interface';
import { IReferentielService } 	from './referentiel.service.interface';
import { Repo }					from '../domain/Repo';
import { Source }				from '../domain/Source';

export class SourcesService implements ISourcesService {
	$http : ng.IHttpService;
	$q : ng.IQService;
	ref : IReferentielService;
	
	constructor( $http: ng.IHttpService, $q: ng.IQService, referentielService: IReferentielService) {
		this.$http = $http;
		this.$q = $q;
		this.ref = referentielService;
	}
	
	public getFullSources() {
		var deferred = this.$q.defer();
		
		this.$http.get('/api/repos/roots')
		.then(response => {
			var repos = [];
			var i = response.data['repos'].length;
			response.data['repos'].forEach( brut => {
				var repo : Repo = Repo.fromData(brut, this.ref);
				this.getContents(repo._id)
				.then( r => {
					repo.contents = r;
					repos.push(repo);
					if(--i == 0) {
						deferred.resolve(repos);
					}
				})
				.catch(erreur => deferred.reject(erreur));
			})
		})
		.catch(erreur => deferred.reject(erreur));
				
		return deferred.promise;
	}
	
	public getContents(id) {
		var deferred = this.$q.defer();
		
		this.$http.get(`/api/repos/repo/${id}/sources`)
		.then( response => {
				var sources = [];
				response.data['sources'].forEach( brut => {
					sources.push(Source.fromData(brut, this.ref));
				})
				this.$http.get(`/api/repos/repo/${id}/repos`)
				.then( response => {
					var i = response.data['repos'].length;
					if(i == 0) {
						deferred.resolve(sources);
					}
					var repos = [];
					response.data['repos'].forEach( brut => {
						var repo : Repo = Repo.fromData(brut, this.ref);
						this.getContents(repo._id)
						.then( r => {
							repo.contents = sources.concat(r);
							repos.push(repo);
							i--;
							if(i == 0) {
								deferred.resolve(repos);
							}
						})
						.catch(erreur => deferred.reject(erreur));						
					})
				})
				.catch(erreur => deferred.reject(erreur));
		})
		.catch(erreur => deferred.reject(erreur));
		
		return deferred.promise;
	}
	
	public getSourceTypes() {
		var deferred = this.$q.defer();
		
		this.$http.get('/api/sources/types')
		.then(response => { deferred.resolve(response.data['sourcetypes']) })
		.catch(erreur => deferred.reject(erreur));
		
		return deferred.promise;
	}
	
	public getRepoTypes() {
		var deferred = this.$q.defer();
		
		this.$http.get('/api/repos/types')
		.then(response => { deferred.resolve(response.data['repotypes']) })
		.catch(erreur => deferred.reject(erreur));
		
		return deferred.promise;
	}
		
	
	// public addAccount(account : any ) {
		// return this.$http.post(`http://localhost:3000/api/accounts`, account)
			// .then( response => response.data )
			// .catch( error => console.log("Erreur addAccount" + error.data) );
	// }
	
	// public deleteAccount(id: any) {
		// return this.$http.delete(`http://localhost:3000/api/accounts/${id}`)
			// .then( response => response.data )
			// .catch( error => console.log("Erreur deleteAccount" + error.data) );
	// }
	
	// public updateAccount(account : any ) {
		// return this.$http.put(`http://localhost:3000/api/accounts/${account._id}`, account)
			// .then( response => response.data )
			// .catch( error => console.log("Erreur updateAccount" + error.data) );
	// }
}