/// <reference path="../../typings/index.d.ts" />

import { IPlacesService } from './places.service.interface';

export class PlacesService implements IPlacesService {
	$http : ng.IHttpService;
	$q : ng.IQService;
	
	constructor( $http: ng.IHttpService, $q: ng.IQService) {
		this.$http = $http;
		this.$q = $q;
	}
	
	public getPlaces() {
		var deferred = this.$q.defer();
		
		this.$http.get('/api/places/roots')
		.then(response => { 
			var i = response.data['places'].length;
			response.data['places'].forEach( place => {
				this.getContents(place._id)
				.then(r => {
					place.contents = r['places'];
					if(--i == 0) {
						deferred.resolve(response.data)
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
		
		this.$http.get(`/api/places/place/${id}/places`)
		.then( response => {
			var i = response.data['places'].length;
			if(i == 0) {
				deferred.resolve(response.data);
			}
			response.data['places'].forEach( place => {
				this.getContents(place._id)
				.then(r => {
					place.contents = r['places']
					i--;
					if(i == 0) {
						deferred.resolve(response.data);
					}
				})
				.catch(erreur => deferred.reject(erreur));						
			})
		})
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