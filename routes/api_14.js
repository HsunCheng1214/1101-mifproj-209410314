var express = require('express');
var router = express.Router();
const apiCrown2Controller_14 = require('../controllers/apiCrown2Controller_14');

/* crown_14 */
router.get('/category_14', apiCrown2Controller_14.getCategories);
router.get('/shop_14', apiCrown2Controller_14.getShop);
router.get('/shop_14/:category',apiCrown2Controller_14.getProductsByCategory);
/* midproj_14 */

/* finalproj_14 */

module.exports = router;
