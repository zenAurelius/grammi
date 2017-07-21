
var Q = require('q');
var dbProvider = require('../utils/dbProvider');

var placeService = require('./place.service');
var service = {};

service.get = get;
service.getByRepo = getByRepo;
//service.create = create;
//service.update = update;
//service.delete = _delete;
service.getTypes = getTypes;
 
module.exports = service;

var SOURCES = 'sources';
var TYPES = 'sourcetypes';

// function create(params) {
	
	// var deferred = Q.defer();
	
	////Verifier si username n'existe pas déjà
	// getByUsername(params.username, function (err, user) {
            // if (err) deferred.reject(err);
            // if (user) deferred.reject('Username "' + params.username + '" existe déjà.');
			// createUser(params);
	// });
	
	// function createUser() {
		////Création du nouveau User
		// var newUser = {};
		// newUser.username = params.username;
		// var hashedPwd = hashPwd(params.password);
		// newUser.password = hashedPwd.hash;
		// newUser.salt = hashedPwd.salt;
		
		////Enregistrement du nouveau User
		// dbProvider.db.collection(COLNAME).insertOne(newUser, function(err, doc) {
			// if (err) {
				// deferred.reject(err);
			// } else {
				// deferred.resolve();
			// }
		// });
	// }
	
	// return deferred.promise;	
// }

function get(id) {
	var deferred = Q.defer();

	dbProvider.db.collection(SOURCES).findOne( { _id: id }, function(err, source){

		if (err) deferred.reject(err);
 
        if (source) {
            if(source.placeid) {
				placeService.get(source.placeid)
				.then((place) => {
					source.place = place;
					deferred.resolve(source);
				});
			} else {
				deferred.resolve(source);
			}
        } else {
             deferred.reject();
        }
	});
	
	return deferred.promise;
}

function getByRepo(id) {
	var deferred = Q.defer();

	dbProvider.db.collection(SOURCES).find( {repo: id}, function(err, result){
		if (err) deferred.reject(err);
 
        if (result) {
            //Completion de place
			var i = result.length;
			if (i == 0) {
				deferred.resolve(result);
			} else {
				result.forEach(repo => {
					if(repo.placeid) {
						placeService.get(repo.placeid)
						.then((place) => {
							repo.place = place;
							if(--i == 0) {deferred.resolve(result);}
						});
					} else {
						if(--i == 0) {deferred.resolve(result);}
					}
				});
			}
        } else {
             deferred.reject();
        }
	});
	
	return deferred.promise;
}

function getTypes() {
	var deferred = Q.defer();

	dbProvider.db.collection(TYPES).find({}, function(err, types){

		if (err) deferred.reject(err);
 
        if (types) {
            deferred.resolve(types);
        } else {
             deferred.reject();
        }
	});
	
	return deferred.promise;
}

