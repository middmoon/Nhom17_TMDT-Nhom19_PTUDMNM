"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  UserRole.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "users",
          key: "_id",
        },
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "roles",
          key: "_id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserRole",
      tableName: "user_roles",
      timestamps: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  return UserRole;
};
