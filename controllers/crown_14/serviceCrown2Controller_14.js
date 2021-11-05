const Category_14 = require('../../models/crown_14/Category_14');
const Shop_14 = require('../../models/crown_14/Shop_14');

exports.getCategories = async (req, res) => {
  try {
    return await Category_14.fetchAll();
  } catch (err) {
    console.log('getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    return await Shop_14.fetchAll();
  } catch (err) {
    console.log('getShop', err);
  }
};

exports.getProductsByCategory = async (category) => {
  console.log('service', category);
  try {
    const cid = await Category_14.fetchCatIdByName(category);
    const results = await Shop_14.fetchByCatId(cid);
    //console.log('service getProductsByCategory',JSON.stringify(results));
    return results;
  } catch (err) {
    console.log(err);
  }
};
