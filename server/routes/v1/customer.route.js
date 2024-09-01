const express = require("express");
const router = express.Router();

const asyncHandler = require("express-async-handler");
const CustomerController = require("../../controllers/customer.controller");
const {
  verifyToken,
  verifyCustomer,
} = require("../../middlewares/auth.middleware");

router
  .get("/", function (req, res, next) {
    res.render("index", { title: "TMDT CTK45A API USER SERVICES V1" });
  })

  .use(verifyToken, verifyCustomer)
  .get("/profile", asyncHandler(CustomerController.getInfoById))
  .put("/update-profile", asyncHandler(CustomerController.updateInfo))
  .put("/update-image", asyncHandler(CustomerController.updateImage));

module.exports = router;
