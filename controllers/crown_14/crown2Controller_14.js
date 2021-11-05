const serviceCrown2Controller_14 = require('./serviceCrown2Controller_14');

exports.getCategories = async (req, res) => {
  try {
    let results = await serviceCrown2Controller_14.getCategories();
    console.log('results', JSON.stringify(results));
    res.render('crown_14/crown2_14', {
      data: results,
      title: 'Crown2_14',
      name: 'Cheng Hsun',
      id: `209410314`,
    });
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
    res.render('crown_14/products_14', {
      data,
      title: req.params.category,
      name: 'Cheng Hsun',
      id: `209410314`,
    });
  } catch (err) {
    res.status(144).json(err);
  }
};
