"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ShopImage extends Model {
    static associate(models) {
      // Define associations here if needed
      this.belongsTo(models.Shop, {
        foreignKey: "shop_id",
        as: "shop",
      });
    }
  }

  ShopImage.init(
    {
      _id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      url: {
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
      modelName: "ShopImage",
      tableName: "shop_images",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return ShopImage;
};
