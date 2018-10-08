var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('api');
});

router.get('/joke', function(req, res, next) {
    res.send('funny joke');
  });

module.exports = router;
