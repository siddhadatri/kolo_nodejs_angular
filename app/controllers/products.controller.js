const db = require("../models");
const Products = db.products;
const ProductsDetails = db.productdetails;
  
    // Save Order in the database
    exports.create = (req, res) => {
      const product = req.body;
      Products.create(product)
        .then(data => {res.send(data);})
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Order."
          });
        });
    }
  
  
  // Retrieve all Order from the database.
  exports.findAll = (req, res) => {
    Products.findAll().then(
      products => res.json({ products })
    ).catch(err => res.json({ error: true }))
  };
  
  // Find a single Order with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
    db.sequelize.query('SELECT * FROM productdetails JOIN products').success(function(rows){
      res.json(rows);
  });
  
    ProductsDetails.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };


// const { getAll } = require('../models/products.model');
// const ProductsModel = require('../models/products.model');
// const Product = new ProductsModel();

// module.getAll = (req, res) => {
//     ProductsModel.getAll()
//     Product.update()
// }

// module.getOne = (req, res) => {
//     ProductsModel.getOne()
//     Product.update()
// }

// module.create = (req, res) => {
//     const payload = req.body;
//     const newProduct = new ProductsModel(payload);
//     newProduct.update();
// }