"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class OrderVoucher extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  OrderVoucher.init(
    {
      order_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "orders",
          key: "_id",
        },
        allowNull: false,
      },
      voucher_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "vouchers",
          key: "_id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OrderVoucher",
      tableName: "order_vouchers",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return OrderVoucher;
};
