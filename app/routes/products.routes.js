const router = require("express").Router();
const Products = require("../controllers/products.controller.js");

router.get("/", Products.findAll);
router.get("/:id", Products.findOne);

module.exports = router;