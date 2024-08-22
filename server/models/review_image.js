"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class ReviewImage extends Model {
    static associate(models) {
      // Define associations here if needed
      this.belongsTo(models.Review, {
        foreignKey: "review_id",
        as: "review",
      });
    }
  }

  ReviewImage.init(
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
      review_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "reviews",
          key: "_id",
        },
      },
    },
    {
      sequelize,
      modelName: "ReviewImage",
      tableName: "review_images",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return ReviewImage;
};
