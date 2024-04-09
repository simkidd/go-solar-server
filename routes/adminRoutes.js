const express = require("express");
const upload = require("../utils/multer");
const { addCategory } = require("../controllers/CategoryController.js");
const {
  addProducts,
  updateProduct,
  updateProductImage,
} = require("../controllers/ProductController.js");

const router = express.Router();

// create a category
router.post("/create-category", addCategory);

//add product
const uploadFields = upload.fields([{ name: "images", maxCount: 3 }]);
router.post("/add-product", uploadFields, addProducts);

//update product(details)
router.patch("/update-product-details", updateProduct);

//update product(img)
router.patch(
  "/update-product-image",
  upload.single("updateImg"),
  updateProductImage
);

module.exports = router;
