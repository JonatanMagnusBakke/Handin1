var express = require('express');
var userFacade = required('../facades/userFacade')
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

app.get('/:username', function(request, response, next) {
  var username = request.params.username;
});

module.exports = router;
