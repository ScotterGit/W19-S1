var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/john', function(req, res, next) {
  setTimeout(() => {
    res.json({firstName: 'John'});
  }, 5000)
  
});

module.exports = router;

