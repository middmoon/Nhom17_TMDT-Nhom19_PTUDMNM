const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const PublicController = require("../../controllers/public.controller");

router
  .get("/", function (req, res, next) {
    res.render("index", { title: "TMDT CTK45A API PUBLIC SERVICES V1" });
  })

  .get("/products", function (req, res, next) {
    res.render("index", { title: "danh sách sản phẩm" });
  })

  .get("/products/:productId", function (req, res, next) {
    res.render("index", { title: "chi tiết sản phẩm" });
  })

  .get("/categories", asyncHandler(PublicController.getCategories))

  .get("/categories/:categoryId/products", function (req, res, next) {
    res.render("index", { title: "danh sách sản phẩm theo danh mục" });
  })

  .get("/brands", asyncHandler(PublicController.getBrands))

  .get("/brands/:brandId/products", function (req, res, next) {
    res.render("index", { title: "danh sách sản phẩm theo thương hiệu" });
  })

  .get("/shop/:shopId", function (req, res, next) {
    res.render("index", { title: "xem chi tiết một shop" });
  })

  .get("/featured-products", function (req, res, next) {
    res.render("index", { title: "gợi ý sản phẩm" });
  });

module.exports = router;
