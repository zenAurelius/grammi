var placeService = require('../services/place.service');

module.exports.get = function(req, res) {
	
	var id = req.params['id'];

	placeService.get(id)
		.then(function (place) {
            res.status(200).json({ 'place' : place });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getTypes = function(req, res) {
	
	placeService.getTypes()
		.then(function (types) {
            res.status(200).json({ 'placetypes' : types });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getByPlace = function(req, res) {
	
	var id = req.params['id'];

	placeService.getByPlace(id)
		.then(function (places) {
            res.status(200).json({ 'places' : places });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getRoots = function(req, res) {
	
	placeService.getRoots()
		.then(function (places) {
            res.status(200).json({ 'places' : places });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}