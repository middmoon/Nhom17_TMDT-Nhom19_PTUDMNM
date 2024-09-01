"use strict";
const { CREATED, OK } = require("../core/success.response");
const ShopService = require("../services/shop.service");

class ShopController {
  registerShop = async (req, res, next) => {
    new CREATED({
      message: "Registered Shop OK",
      metadata: await ShopService.registerShop(req.body, req._id),
    }).send(res);
  };

  viewShop = async (req, res, next) => {
    new OK({
      message: "view for owner shop OK",
      metadata: await ShopService.viewShop(req._id),
    }).send(res);
  };
}

module.exports = new ShopController();
