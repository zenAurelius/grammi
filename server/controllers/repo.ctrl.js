var repoService = require('../services/repo.service');

module.exports.get = function(req, res) {
	
	var id = req.params['id'];

	repoService.get(id)
		.then(function (repo) {
            res.status(200).json({ 'repo' : repo });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getTypes = function(req, res) {
	
	repoService.getTypes()
		.then(function (types) {
            res.status(200).json({ 'repotypes' : types });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getByRepo = function(req, res) {
	
	var id = req.params['id'];

	repoService.getByRepo(id)
		.then(function (repos) {
            res.status(200).json({ 'repos' : repos });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}

module.exports.getRoots = function(req, res) {
	
	repoService.getRoots()
		.then(function (repos) {
            res.status(200).json({ 'repos' : repos });
        })
        .catch(function (err) {
            res.status(404).send(err);
        });
}