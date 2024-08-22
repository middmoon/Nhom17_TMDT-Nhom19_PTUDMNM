"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    static associate(models) {
      // Define associations here if needed
      this.belongsTo(models.User, {
        foreignKey: "seller_id",
        as: "seller",
      });

      this.hasMany(models.ShopImage, {
        foreignKey: "shop_id",
        as: "images",
      });

      this.hasMany(models.Product, {
        foreignKey: "shop_id",
        as: "products",
      });

      this.hasMany(models.Order, {
        foreignKey: "shop_id",
        as: "orders",
      });

      this.belongsTo(models.Province, {
        foreignKey: "province_code",
        as: "location",
      });
    }
  }

  Shop.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "_id",
        },
      },
      province_code: {
        type: DataTypes.STRING(20),
        references: {
          model: "provinces",
          key: "code",
        },
      },
    },
    {
      sequelize,
      modelName: "Shop",
      tableName: "shops",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return Shop;
};
