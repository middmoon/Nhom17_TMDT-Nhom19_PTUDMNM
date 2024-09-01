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

      this.hasMany(models.Product, {
        foreignKey: "shop_id",
        as: "products",
      });

      this.hasMany(models.Order, {
        foreignKey: "shop_id",
        as: "orders",
      });

      this.belongsToMany(models.Ward, {
        through: models.ShopAddress,
        foreignKey: "shop_id",
        otherKey: "ward_code",
        as: "addresses",
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
      },
      seller_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img_url: {
        type: DataTypes.STRING,
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
