"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      this.belongsTo(models.Shop, {
        foreignKey: "shop_id",
        as: "shop",
      });

      this.belongsTo(models.User, {
        foreignKey: "customer_id",
        as: "user",
      });

      this.hasMany(models.OrderItem, {
        foreignKey: "order_id",
        as: "items",
      });

      this.belongsToMany(models.Product, {
        through: models.OrderItem,
        foreignKey: "order_id",
        otherKey: "product_id",
        as: "products",
      });

      this.hasOne(models.Review, {
        foreignKey: "order_id",
        as: "review",
      });

      // this.hasOne(models.CustomerShippingAddress, {
      //   foreignKey: "customer_shipping_address_id",
      //   as: "shipping_address",
      // });

      this.belongsToMany(models.Voucher, {
        through: models.OrderVoucher,
        foreignKey: "order_id",
        otherKey: "voucher_id",
        as: "voucher",
      });
    }
  }

  Order.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM(
          "pending",
          "confirmed",
          "shipped",
          "delivered",
          "cancelled"
        ),
        defaultValue: "pending",
      },
      is_paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      order_code: {
        type: DataTypes.STRING,
        unique: true,
      },
      shop_address: {
        type: DataTypes.STRING,
      },
      total_amount: {
        type: DataTypes.BIGINT,
      },
      discount_amount: {
        type: DataTypes.BIGINT,
      },
      final_amount: {
        type: DataTypes.BIGINT,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "_id",
        },
      },
      customer_shipping_address: {
        type: DataTypes.STRING,
      },
      shop_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "shops",
          key: "_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return Order;
};
