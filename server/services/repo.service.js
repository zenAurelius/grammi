
var Q = require('q');
var dbProvider = require('../utils/dbProvider');

var service = {};

service.get = get;
service.getByRepo = getByRepo;
service.getRoots = getRoots;
//service.create = create;
//service.update = update;
//service.delete = _delete;
service.getTypes = getTypes;
 
module.exports = service;

var REPOS = 'repos';
var TYPES = 'repotypes';

function get(id) {
	var deferred = Q.defer();

	dbProvider.db.collection(REPOS).findOne( { _id: id }, function(err, result){

		if (err) deferred.reject(err);
 
        if (result) {
            deferred.resolve(result);
        } else {
             deferred.reject();
        }
	});
	
	return deferred.promise;
}

function getByRepo(id) {
	var deferred = Q.defer();

	dbProvider.db.collection(REPOS).find( {repo: id}, function(err, result){
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

	dbProvider.db.collection(REPOS).find( {repo: { $exists: false }}, function(err, result){
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

