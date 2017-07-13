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
		
		this.$http.get('/api/places/roots').then(
			function(response) { deferred.resolve(response.data) },
			function(erreur) { deferred.reject(erreur) }
		);
		
		return deferred;
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