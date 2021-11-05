const serviceCrown2Controller_14 = require('./crown_14/serviceCrown2Controller_14');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_14.getCategories();
    return res.json(data);
  } catch (err) {
    console.log('crow2Controller getCategories', err);
  }
};

exports.getShop = async (req, res) => {
  try {
    const data = await serviceCrown2Controller_14.getShop();
    return res.json(data);
  } catch (err) {
    res.status(144).json(err);
  }
};

exports.getProductsByCategory = async (req, res) => {
  console.log('category', req.params.category);
  try {
    const data = await serviceCrown2Controller_14.getProductsByCategory(
      req.params.category
    );
    //console.log('getProductsByCategory',JSON,stringify(data))
    return res.json(data);
  } catch (err) {
    res.status(144).json(err);
  }
};
