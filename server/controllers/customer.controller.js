"use strict";
const { OK, CREATED } = require("../core/success.response");
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

  updateCustomerImage = async (req, res, next) => {
    new OK({
      message: "update user image OK",
      metadata: await CustomerService.updateCustomerImage(req._id, req.file),
    }).send(res);
  };

  addShippingAddress = async (req, res, next) => {
    new CREATED({
      message: "add shipping address OK",
      metadata: await CustomerService.addShipingAddress(req._id, req.body),
    }).send(res);
  };

  getShippingAddresses = async (req, res, next) => {
    new OK({
      message: "get shipping addresses OK",
      metadata: await CustomerService.getShippingAddresses(req._id),
    }).send(res);
  };
}

module.exports = new UserController();
