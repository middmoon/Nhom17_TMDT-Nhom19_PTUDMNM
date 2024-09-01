"use strict";

require("dotenv").config();
const { sequelize, User, CustomerShippingAddress } = require("../models");
const { NotFoundError, BadRequestError } = require("../core/error.response");
const { getInfoData, omitInfoData } = require("../utils");
const UserService = require("./user.service");

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

    if (foundUser) {
      return {
        user: foundUser,
      };
    }
  }

  static async updateInfo(userId, payload) {
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

      if (!updatedUser) {
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

  static async updateImage(userId, payload) {
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

      if (!updatedUser) {
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

  static async addShipingAddres(userId, payload) {
    const newAddress = await CustomerShippingAddress.create({
      customer_id: userId,
      ward_code: payload.ward_code,
      address: payload.address,
    });

    if (!newAddress) {
      throw new BadRequestError(
        "Error: Can not add new shipping address to your account"
      );
    }

    return {
      newAddress: getInfoData({
        fields: ["address"],
        object: newAddress,
      }),
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

  static async addProductToCart() {}

  static async cacelOrder() {}

  static async checkOutOrder() {}

  static async viewProducts() {}

  static async viewProductById() {}

  static async viewShopById(shopId) {}
}

module.exports = CustomerService;
