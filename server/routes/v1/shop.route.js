const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const ShopController = require("../../controllers/shop.controller");

const {
  verifyToken,
  verifySeller,
} = require("../../middlewares/auth.middleware");

const upload = require("../../config/multer.config");

router
  .get("/", function (req, res, next) {
    res.render("index", { title: "TMDT CTK45A API SHOP SERVICES V1" });
  })

  .post("/register", verifyToken, asyncHandler(ShopController.registerShop))

  .use(verifyToken)
  .use(verifySeller)
  .get("/profile", asyncHandler(ShopController.viewShop))

  .post("/add-product", asyncHandler(ShopController.addProduct))
  .post("/update-product-images", asyncHandler(ShopController.addProductImages))

  .put(
    "/update-image",
    upload.single("customerImage"),
    asyncHandler(ShopController.updateShopImage)
  );

module.exports = router;
