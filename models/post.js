'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsToMany(models.Category, {
        through: 'Post_Categories',
        as: 'categories', 
        foreignKey: 'postId',
        otherKey: 'categoryId'
      });
      Post.hasMany(models.Comment, {
        as: 'comments', 
        foreignKey: 'postId'
      });
    }
  }
  Post.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      datePosted: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      imgUrl: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Post'
    }
  );
  return Post;
};
