"use strict";

require("dotenv").config();
const { sequelize, User, CustomerShippingAddress } = require("../models");
const { NotFoundError, BadRequestError } = require("../core/error.response");
const { getInfoData, omitInfoData } = require("../utils");
const UserService = require("./user.service");
const cloudinary = require("../config/cloudinary.config");
const { pullAll } = require("lodash");
const { where } = require("sequelize");

class CustomerService {
  static async getUserInfoById(userId) {
    const foundUser = await User.findOne({
      where: { _id: userId },
      attributes: { exclude: ["password", "_id"] },
      raw: true,
    });

    if (!foundUser) {
      throw new NotFoundError("Error: Can not find the user");
    }

    return {
      user: foundUser,
    };
  }

  static async updateInfo(userId, payload) {
    console.log(userId);
    try {
      await UserService.foundUser(userId);

      const updatedUser = await User.update(
        { ...payload },
        {
          where: {
            _id: userId,
          },
        }
      );

      if (updatedUser.length === 0) {
        throw new NotFoundError("Error: Can not update this user");
      }

      if (updatedUser) {
        return {
          user: omitInfoData({
            fields: ["_id", "password"],
            object: updatedUser,
          }),
        };
      }
    } catch (error) {
      throw error;
    }
  }

  static async updateCustomerImage(userId, file) {
    const imgPath = file.path;

    const foundUser = await User.findOne({
      where: { _id: userId },
      attributes: { exclude: ["password", "_id"] },
      raw: true,
    });

    if (!foundUser) {
      throw new NotFoundError("Error: Can not find the user");
    }

    try {
      const r = await cloudinary.uploader.upload(imgPath, {
        folder: "users",
        public_id: `user_${userId}`,
        overwrite: true,
      });

      if (!r) {
        throw new BadRequestError("Error---: Can not update this user");
      }

      const updatedUser = await User.update(
        {
          image_url: r.secure_url,
        },
        {
          where: {
            _id: userId,
          },
        }
      );

      if (updatedUser.length === 0) {
        throw new NotFoundError("Error: Can not update this user");
      }

      return {
        user: omitInfoData({
          fields: ["_id", "password"],
          object: updatedUser,
        }),
      };
    } catch (error) {
      throw error;
    }
  }

  static async addShipingAddress(userId, payload) {
    // console.log(userId);
    // console.log(payload);

    // const address = `${payload.address} - ${payload.ward} - ${payload.district} - ${payload.province}`;

    // console.log(address);

    const foundUser = await User.findOne({
      where: { _id: userId },
      attributes: { exclude: ["password", "_id"] },
      raw: true,
    });

    if (!foundUser) {
      throw new NotFoundError("Error: Can not find the user");
    }

    // console.log(foundUser);

    const address = `${payload.address} - ${payload.ward} - ${payload.district} - ${payload.province}`;

    // console.log(address);

    const newAddress = await CustomerShippingAddress.create({
      customer_id: userId,
      ward_code: payload.ward_code,
      address: address,
      phone_number: payload.phone_number,
    });

    if (!newAddress) {
      throw new BadRequestError(
        "Error: Can not add new shipping address to your account"
      );
    }

    return {
      shipping_address: getInfoData({
        fields: ["address", "phone_number"],
        object: newAddress,
      }),
    };
  }

  static async getShippingAddresses(userId) {
    const foundUser = await User.findOne({
      where: { _id: userId },
      attributes: { exclude: ["password", "_id"] },
      raw: true,
    });

    if (!foundUser) {
      throw new NotFoundError("Error: Can not find the user");
    }

    const shippingAddresses = await CustomerShippingAddress.findAll({
      where: {
        customer_id: userId,
      },
      attributes: { exclude: ["createdAt", "updatedAt", "customer_id"] },
    });

    if (!shippingAddresses) {
      throw new NotFoundError("Error: Can not find address");
    }

    return {
      shipping_ddresses: shippingAddresses,
    };
  }

  static async deleteShipingAddres(userId, shippingAddressId) {
    const deletedAddress = await User.delete({
      where: { customer_id: userId, _id: shippingAddressId },
      attributes: [],
    });

    if (!deletedAddress) {
      throw new NotFoundError("Error: Can not delete this address");
    }
  }

  static async getCart(userId) {}
  static async addProductToCart(userId) {}
  static async updateCart(userId) {}
  static async deleteProductInCart(userId) {}

  static async getOrders(userId) {}
  static async createOrder(userId) {}
  static async getOrderDetails(orderId) {}
  static async reviewOrder(orderId) {}
  static async cacelOrder(orderId) {}
}

module.exports = CustomerService;
