const Product = require('../models/product.model');

exports.test = function (req, res) {
    res.send('Controller test...');
};

exports.product_create = function (req, res) {
    let product = new Product(
        {
            name : req.body.name,
            price : req.body.price
        }
    );
    product.save( function (err) {
        if (err) {
            console.log(err);
        }
        res.send('Product create');
    })
};
