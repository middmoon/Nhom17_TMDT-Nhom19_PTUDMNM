const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const ShopController = require("../../controllers/shop.controller");

router
  .post("/register", asyncHandler(ShopController.registerShop))

  .get("/", function (req, res, next) {
    res.render("index", { title: "TMDT CTK45A API SHOP SERVICES V1" });
  });

module.exports = router;
