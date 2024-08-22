"use strict";
const { CREATED, OK } = require("../core/success.response");
const ShopService = require("../services/shop.service");

class ShopController {
  registerShop = async (req, res, next) => {
    new CREATED({
      message: "Registered Shop OK",
      metadata: await ShopService.registerShop(req.body),
      options: {
        limit: 10,
      },
    }).send(res);
  };
}

module.exports = new ShopController();
