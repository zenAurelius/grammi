var express = require('express');
var router = express.Router();

//CONTROLLERS
var sourceCtrl = require('../controllers/source.ctrl');
var placeCtrl = require('../controllers/place.ctrl');
var repoCtrl = require('../controllers/repo.ctrl');

//SOURCES
router.get('/sources/source/:id', sourceCtrl.get);
router.get('/sources/types', sourceCtrl.getTypes);

//PLACES
router.get('/places/place/:id', placeCtrl.get);
router.get('/places/place/:id/places', placeCtrl.getByPlace);
router.get('/places/roots', placeCtrl.getRoots);
router.get('/places/types', placeCtrl.getTypes);

//REPOS
router.get('/repos/repo/:id', repoCtrl.get);
router.get('/repos/repo/:id/sources', sourceCtrl.getByRepo);
router.get('/repos/repo/:id/repos', repoCtrl.getByRepo);
router.get('/repos/roots', repoCtrl.getRoots);
router.get('/repos/types', repoCtrl.getTypes);

module.exports = router;