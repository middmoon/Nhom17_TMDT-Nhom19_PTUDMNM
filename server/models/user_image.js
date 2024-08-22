"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserImage extends Model {
    static associate(models) {
      // Define associations here if needed
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }

  UserImage.init(
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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "_id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserImage",
      tableName: "user_Images",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return UserImage;
};
