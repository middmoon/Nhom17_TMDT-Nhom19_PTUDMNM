"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      // Define associations here if needed
      this.belongsTo(models.Order, {
        foreignKey: "order_id",
        as: "order",
      });

      this.belongsTo(models.Product, {
        foreignKey: "product_id",
        as: "product",
      });
    }
  }

  Review.init(
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
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "orders",
          key: "_id",
        },
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "reviews",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return Review;
};
