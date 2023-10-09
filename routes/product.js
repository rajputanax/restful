const express = require("express");
const router = express.Router(); // Change 'path' to 'router'
const {
    getAllProducts,
    getTestProduct
} = require("../controllers/product"); // Remove the space after 'product'

router.route("/").get(getAllProducts); // Use 'router' instead of 'path'
router.route("/test").get(getTestProduct);

module.exports= router; 
