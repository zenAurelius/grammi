
var Q = require('q');
var dbProvider = require('../utils/dbProvider');

var service = {};

service.get = get;
service.getByPlace = getByPlace;
service.getRoots = getRoots;
//service.create = create;
//service.update = update;
//service.delete = _delete;
service.getTypes = getTypes;
 
module.exports = service;

var PLACES = 'places';
var TYPES = 'placetypes';

function get(id) {
	var deferred = Q.defer();

	dbProvider.db.collection(PLACES).findOne( { _id: id }, function(err, result){

		if (err) deferred.reject(err);
 
        if (result) {
            deferred.resolve(result);
        } else {
             deferred.reject();
        }
	});
	
	return deferred.promise;
}

function getByPlace(id) {
	var deferred = Q.defer();

	dbProvider.db.collection(PLACES).find( {parent: id}, function(err, result){
		if (err) deferred.reject(err);
 
        if (result) {
            deferred.resolve(result);
        } else {
             deferred.reject();
        }
	});
	
	return deferred.promise;
}

function getRoots() {
	var deferred = Q.defer();

	dbProvider.db.collection(PLACES).find( {parent: { $exists: false }}, function(err, result){
		if (err) deferred.reject(err);
 
        if (result) {
            deferred.resolve(result);
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

