var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Welcome', desc: 'We are Shah Family. Click on each of the link to know more :)'});
});

router.get('/rutul', function(req, res, next) {
    res.render('rutul', { title: 'Rutul Shah', desc: 'Hello ! I am currently pursuing Computer Programming at Georgian College!' });
});

router.get('/vimal', function(req, res, next) {
    res.render('vimal', { title: 'Vimal Shah', desc: 'Hello ! I am Chemical Engineer and working for RELIANCE since 30 years' });
});

router.get('/dimple', function(req, res, next) {
    res.render('dimple', { title: 'Dimple Shah', desc: 'Hello ! I am a house-maker :)' });
});

router.get('/minauti', function(req, res, next) {
    res.render('minauti', { title: 'Minauti Shah', desc: 'Hello ! I am current in grade 12 and want to become a Lawyer' });
});

module.exports = router;
