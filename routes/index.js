var express = require('express');
var router = express.Router();
const dishes = require('../public/javascripts/dishes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dishes: dishes });
});

router.get('/detalle/:id', function(req, res, next) {
  let dish = {};
  for (i = 0; i < dishes.length; i ++) {
    dishes[i].id == req.params.id ? dish = dishes[i] : '';    
  }
  res.render('../views/detalleMenu', { dish : dish });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
