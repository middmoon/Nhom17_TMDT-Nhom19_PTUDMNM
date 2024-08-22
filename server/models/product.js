"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      // Define associations here if needed

      this.belongsTo(models.Shop, {
        foreignKey: "shop_id",
        as: "shop",
      });

      this.belongsTo(models.Brand, {
        foreignKey: "brand_id",
        as: "brand",
      });

      this.belongsTo(models.Category, {
        foreignKey: "category_id",
        as: "category",
      });

      this.hasMany(models.ProductImage, {
        foreignKey: "product_id",
        as: "images",
      });

      this.hasMany(models.Review, {
        foreignKey: "product_id",
        as: "reviews",
      });

      this.hasMany(models.OrderItem, {
        foreignKey: "product_id",
        as: "order_items",
      });

      this.belongsToMany(models.Order, {
        through: models.OrderItem,
        foreignKey: "product_id",
        otherKey: "order_id",
        as: "orders",
      });
    }
  }

  Product.init(
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
      description: {
        type: DataTypes.TEXT,
      },
      slug: {
        type: DataTypes.STRING,
        unique: true,
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
      },
      price: {
        type: DataTypes.BIGINT,
      },
      sale_price: {
        type: DataTypes.BIGINT,
      },
      shop_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "shops",
          key: "_id",
        },
      },
      brand_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "brands",
          key: "_id",
        },
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "categories",
          key: "_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return Product;
};
