"use strict";

const { includes } = require("lodash");
const { NotFoundError, BadRequestError } = require("../core/error.response");

const { sequelize, User, Shop } = require("../models");

class ShopService {
  static async registerShop({ userId, province_code }) {
    const transaction = await sequelize.transaction();

    try {
      const foundUser = await User.findOne({
        where: { _id: userId },
        attributes: ["_id"],
        raw: true,
        transaction,
      });

      if (!foundUser) {
        throw new NotFoundError(
          "Something wrong with your info: Not find user"
        );
      }

      const foundShop = await Shop.findOne({
        where: { seller_id: userId },
        attributes: ["_id"],
        raw: true,
        transaction,
      });

      if (foundShop) {
        throw new BadRequestError("You already have a booth");
      }

      const newShop = await Shop.create(
        {
          seller_id: userId,
          province_code: province_code,
        },
        { transaction }
      );

      const sellerRole = await Role.findOne({
        where: { name: "seller" },
        transaction,
      });

      await UserRole.create(
        {
          user_id: userId,
          role_id: sellerRole._id,
        },
        { transaction }
      );

      await transaction.commit();

      return newShop;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  // static async getUserInfoById(userId) {
  //   const foundUser = await User.findOne({
  //     where: { _id: userId },
  //     attributes: { exclude: ["password", "_id", "role"] },
  //     raw: true,
  //   });

  //   if (!foundUser) {
  //     throw new NotFoundError("Error: Can not find the user");
  //   }

  //   if (foundUser) {
  //     return {
  //       user: foundUser,
  //     };
  //   }
  // }
}

module.exports = ShopService;
