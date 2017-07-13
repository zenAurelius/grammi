
module.exports = {

  initializeDB: function(next){
	var database = {collection: function(name){ return this.collections[name]}, collections: []};
	var Datastore = require('nedb');
	database.collections.sources = new Datastore({ filename: './server/db/sources.nedb', autoload: true });
	database.collections.sourcetypes = new Datastore({ filename: './server/db/sourcetypes.nedb', autoload: true });
	database.collections.places = new Datastore({ filename: './server/db/places.nedb', autoload: true });
	database.collections.placetypes = new Datastore({ filename: './server/db/placetypes.nedb', autoload: true });
	database.collections.repos = new Datastore({ filename: './server/db/repos.nedb', autoload: true });
	database.collections.repotypes = new Datastore({ filename: './server/db/repotypes.nedb', autoload: true });
	
	module.exports.db = database
	console.log("Database connection ready");
	next();
  },
  
  initialize: function(next){
    this.initializeDB(next);
  }
}