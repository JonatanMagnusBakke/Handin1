var debug = require('debug')('expresslogging:route-index');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  debug("In index");
  res.render('index', { title: 'Express' });
});

router.get('/hej', function(req, res, next) {
  debug("In index");
  res.render('index', { title: 'Express' });
});

router.get('/hej2', function(req, res, next) {
  debug("In index");
  res.render('index', { title: 'Express' });
});

module.exports = router;
