var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/form-submission', function(req, res, next) {
  // console.log(req.body)
  res.json({success=true});  
});

router.get('/:id/:firstName/:lastName', function(req, res, next) {
  console.log(req.params)
  res.send('yay')
});


router.get('/john', function(req, res, next) {
  console.log(req.query)
  console.log(req.params)
  console.log(req.body)
});

module.exports = router;

