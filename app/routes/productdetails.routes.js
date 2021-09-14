module.exports = app => {
    const productdetail = require("../controllers/productdetail.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Order
    router.post("/", orders.create);
  
    // Retrieve all Orders
    router.get("/", orders.findAll);
  
    // Retrieve a single Order with id
    router.get("/:id", orders.findOne);
  
    app.use('/api/orders', router);
  };