"use strict";
require("dotenv").config();

const ROLE = JSON.parse(process.env.ROLES).seller;

const { NotFoundError, BadRequestError } = require("../core/error.response");

const { getInfoData } = require("../utils");

const { sequelize, User, Shop, UserRole, Product } = require("../models");

class ShopService {
  static async registerShop({ name }, userId) {
    const foundUser = await User.findOne({
      where: { _id: userId },
      attributes: ["_id"],
    });

    if (!foundUser) {
      throw new NotFoundError("Something wrong with your info: Not find user");
    }

    const foundShop = await Shop.findOne({
      where: { seller_id: userId },
      attributes: ["_id"],
    });

    if (foundShop) {
      throw new BadRequestError("You already have a booth");
    }

    const t = await sequelize.transaction();

    try {
      const newShop = await Shop.create(
        {
          seller_id: userId,
          name: name,
        },
        { transaction: t }
      );

      if (!newShop) {
        throw new BadRequestError("Can not create a new booth");
      }

      const newRole = await UserRole.create(
        {
          user_id: userId,
          role_id: ROLE,
        },
        { transaction: t }
      );

      if (!newRole) {
        throw new BadRequestError("Can not add a new role");
      }

      await t.commit();

      return {
        shop: getInfoData({
          fields: ["_id", "name"],
          object: newShop,
        }),
      };
    } catch (error) {
      await t.rollback();
      throw error;
    }
  }

  static async viewShop(ownerId) {
    const foundUser = await User.findOne({
      where: { _id: ownerId },
      attributes: ["_id"],
    });

    if (!foundUser) {
      throw new NotFoundError("Something wrong with your info: Not find user");
    }

    const foundShop = await Shop.findOne({
      where: { seller_id: ownerId },
    });

    if (!foundShop) {
      throw new NotFoundError("Something wrong with your info: Not find shop");
    }

    return {
      foundShop,
    };
  }

  static async updateShopInfo() {}

  static async addShopImage() {}

  static async deleteShopImage() {}

  static async addProduct(payload, ownerId) {
    const foundUser = await User.findOne({
      where: { _id: ownerId },
      attributes: ["_id"],
    });

    if (!foundUser) {
      throw new NotFoundError("Something wrong with your info: Not find user");
    }

    const foundShop = await Shop.findOne({
      where: { seller_id: ownerId },
      attributes: ["_id"],
    });

    if (!foundShop) {
      throw new NotFoundError("Something wrong with your info: Not find shop");
    }
    const now = Date.now();

    const slug = payload.name
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .concat(`-${now + 10}`);

    const newProduct = Product.create({
      name: payload.name,
      description: payload.description,
      price: payload.price,
      sale_price: payload.sale_price,
      stock_quantity: payload.stock_quantity,
      slug: slug,
      shop_id: foundShop._id,
      brand_id: payload.brand_id,
      category_id: payload.category_id,
    });

    if (!newProduct) {
      throw new BadRequestError("Can not add new product for your shop");
    }

    return {
      product: newProduct,
    };
  }

  static async addProductImage() {}

  static async updateProductInfo() {}

  static async deleteProduct() {}

  static async viewProducts() {}

  static async viewProductById() {}

  static async viewOrders() {}

  static async viewOrderById(orderId) {}

  static async updateOrder(orderId) {}
}

module.exports = ShopService;
