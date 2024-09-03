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

  .use(verifyToken, verifyCustomer)
  .get("/profile", asyncHandler(CustomerController.getInfoById))
  .get(
    "/shipping-addresses",
    asyncHandler(CustomerController.getShippingAddresses)
  )

  .post(
    "/add-shipping-address",
    asyncHandler(CustomerController.addShippingAddress)
  )

  .put("/update-profile", asyncHandler(CustomerController.updateInfo))
  .put(
    "/update-image",
    upload.single("customerImage"),
    asyncHandler(CustomerController.updateCustomerImage)
  );

module.exports = router;
