var express = require('express');
var router = express.Router();
const crown2Controller_14 = require('../controllers/crown_14/crown2Controller_14');

/* GET home page. */
router.get('/', crown2Controller_14.getCategories);
router.get('/shop_14', crown2Controller_14.get)
router.get('/shop_14/:category', crown2Controller_14.getProductsByCategory);

module.exports = router;
