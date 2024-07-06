const { Op } = require('sequelize');
require('dotenv').config();
const { Comment } = require('../../models');

class CommentService {
  static findAll = async () => {
    try {
      const comments = Comment.findAll();
      return comments;
    } catch (err) {
      throw err;
    }
  };

  static findAllMe = async (userId) => {
    try {
      let filterOptions = {
        where: {
          userId
        },
        include: {
          model: Task,
          as: 'tasks'
        }
      };

      const comments = Comment.findAll(filterOptions);
      return comments;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const filterOptions = {
        where: {
          id
        }
      };

      const comment = await Comment.findOne(filterOptions);
      if (!comment) throw { name: 'ErrorNotFound', message: 'Comment Not Found' };

      return comment;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const comment = await Comment.create(params, {
        returning: true
      });
      return comment;
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;
      const postId = params.body.postId;

      const comment = await Comment.findOne({
        where: {
          id,
          postId
        }
      });

      if (!comment) throw { name: 'ErrorNotFound', message: 'Comment not found' };

      const updatedComment = await comment.update(body);
      return updatedComment;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id) => {
    try {
      const filterOptions = {
        where: {
          id
        }
      };
      const comment = await Comment.findOne(filterOptions);

      if (!comment) throw { name: 'ErrorNotFound', message: 'Comment not found' };

      const deletedComment = await comment.destroy();
      return deletedComment;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = CommentService;
