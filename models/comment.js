'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      Comment.belongsTo(models.Post, { foreignKey: 'postId' });
    }
  }
  Comment.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Posts',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};