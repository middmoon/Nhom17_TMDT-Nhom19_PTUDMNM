const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const ShopController = require("../../controllers/shop.controller");

const {
  verifyToken,
  verifySeller,
} = require("../../middlewares/auth.middleware");

router
  .get("/", function (req, res, next) {
    res.render("index", { title: "TMDT CTK45A API SHOP SERVICES V1" });
  })

  .post("/register", verifyToken, asyncHandler(ShopController.registerShop))

  .get(
    "/profile",
    verifyToken,
    verifySeller,
    asyncHandler(ShopController.viewShop)
  );

module.exports = router;
