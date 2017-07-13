var sourceService = require('../services/source.service');

module.exports.get = function(req, res) {
	
	var id = req.params['id'];

	sourceService.get(id)
		.then(function (source) {
            res.status(200).json({ 'source' : source });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getTypes = function(req, res) {
	
	sourceService.getTypes()
		.then(function (types) {
            res.status(200).json({ 'sourcetypes' : types });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getByRepo = function(req, res) {
	
	var id = req.params['id'];

	sourceService.getByRepo(id)
		.then(function (sources) {
            res.status(200).json({ 'sources' : sources });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}