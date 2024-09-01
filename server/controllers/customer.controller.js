"use strict";
const { OK } = require("../core/success.response");
const CustomerService = require("../services/customer.service");

class UserController {
  getInfoById = async (req, res, next) => {
    new OK({
      message: "get user info OK",
      metadata: await CustomerService.getUserInfoById(req._id),
    }).send(res);
  };

  updateInfo = async (req, res, next) => {
    new OK({
      message: "update user info OK",
      metadata: await CustomerService.updateInfo(req._id, req.body),
    }).send(res);
  };

  updateImage = async (req, res, next) => {
    new OK({
      message: "update user image OK",
      metadata: await CustomerService.updateImage(req._id, req.body),
    }).send(res);
  };
}

module.exports = new UserController();
