var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/:id/:firstName/:lastName', function(req, res, next) {
});


router.get('/john', function(req, res, next) {
  console.log(req.query)
  console.log(req.params)
  console.log(req.body)
  res.json({firstName: 'John'});  
});

module.exports = router;

