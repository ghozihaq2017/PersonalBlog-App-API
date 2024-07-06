'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Post, {
        through: 'Post_Categories',
        as: 'posts',
        foreignKey: 'categoryId',
        otherKey: 'postId'
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      }
    },
    {
      sequelize,
      modelName: 'Category'
    }
  );
  return Category;
};
