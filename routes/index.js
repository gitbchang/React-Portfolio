var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Brian H. Chang' });
});

router.get('/portfolio', function(req, res, next) {
  res.render('index', { title: 'Brian H. Chang' });
});

router.get('/about', function(req, res, next) {
  res.render('index', { title: 'Brian H. Chang' });
});


module.exports = router;
