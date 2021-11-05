var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'Cheng Hsun',
    id: '209410314',
  });
});

module.exports = router;
