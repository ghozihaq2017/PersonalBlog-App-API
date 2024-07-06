'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post_Category extends Model {
    static associate(models) {
      // Associations are defined in Post and Category models
    }
  }
  Post_Category.init(
    {
      postId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Posts',
          key: 'id'
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Post_Category',
      tableName: 'Post_Categories'
    }
  );
  return Post_Category;
};
