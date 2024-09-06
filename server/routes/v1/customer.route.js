const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const CustomerController = require("../../controllers/customer.controller");
const {
  verifyToken,
  verifyCustomer,
} = require("../../middlewares/auth.middleware");
const upload = require("../../config/multer.config");

router
  .get("/", function (req, res, next) {
    res.render("index", { title: "TMDT CTK45A API USER SERVICES V1" });
  })
  // profile
  .use(verifyToken, verifyCustomer)
  .get("/profile", asyncHandler(CustomerController.getInfoById))
  .put("/profile", asyncHandler(CustomerController.updateInfo))
  .put(
    "/update-image",
    upload.single("customerImage"),
    asyncHandler(CustomerController.updateCustomerImage)
  )
  // shipping address
  .get(
    "/shipping-addresses",
    asyncHandler(CustomerController.getShippingAddresses)
  )
  .post(
    "/shipping-address",
    asyncHandler(CustomerController.addShippingAddress)
  )
  .put(
    "/shipping-address/:shippingAddressId",
    asyncHandler(CustomerController.updateShippingAddress)
  )
  .delete(
    "/shipping-address/:shippingAddressId",
    asyncHandler(CustomerController.deleteShipingAddres)
  )
  // cart
  .get("/cart", function (req, res, next) {
    res.render("index", { title: "thông tin giỏ hàng" });
  })
  .post("/cart", function (req, res, next) {
    res.render("index", { title: "thêm sản phẩm vào giỏ hàng" });
  })
  .put("/cart/:itemId", function (req, res, next) {
    res.render("index", { title: "cập nhật sản phẩm trong giỏ hàng" });
  })
  .delete("/cart/:itemId", function (req, res, next) {
    res.render("index", { title: "xóa sản phẩm khỏi giỏ hàng" });
  })

  //order
  .get("/orders", function (req, res, next) {
    res.render("index", { title: "thông tin các dơn hàng" });
  })
  .post("/orders", function (req, res, next) {
    res.render("index", { title: "tạo đơn hàng mới" });
  })
  .put("/orders/:orderId", function (req, res, next) {
    res.render("index", { title: "chi tiết đơn hàng" });
  })
  .put("/orders/:orderId/review", function (req, res, next) {
    res.render("index", { title: "đánh giá đơn hàng" });
  })
  .delete("/orders/:orderId", function (req, res, next) {
    res.render("index", { title: "hủy đơn hàng" });
  });

//payment
// .post("/payment", function (req, res, next) {
//   res.render("index", { title: "thanh toán đơn hàng / checkout" });
// })
// .get("/payment", function (req, res, next) {
//   res.render("index", { title: "thêm sản phẩm vào giỏ hàng" });
// })

module.exports = router;
