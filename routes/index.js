var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ADVUM' });
});

/* GET about page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'À propos' });
});

/* GET forum page. */
router.get('/forum', function(req, res) {
  res.render('forum', { title: 'Forum' });
});

/* GET contact page. */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
