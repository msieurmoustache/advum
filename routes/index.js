var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');

/* GET home page. */
router.get('/', stormpath.getUser, function(req, res) {
  res.render('index', {
    title: 'ADVUM'
  });
});

/* GET about page. */
router.get('/about', stormpath.getUser, function(req, res) {
  res.render('about', { title: 'À propos' });
});

/* GET forum page. */
router.get('/forum', stormpath.getUser, function(req, res) {
  res.render('forum', { title: 'Forum' });
});

/* GET contact page. */
router.get('/contact',  stormpath.getUser, function(req, res) {
  res.render('contact', { title: 'Contact' });
});

/* GET profile page. */

router.get('/profile',stormpath.loginRequired,require('./profile')());

module.exports = router;
