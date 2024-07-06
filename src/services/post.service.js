const { Op } = require('sequelize');
require('dotenv').config();
const { Post, Category, Comment } = require('../../models');

class PostService {
  static findAll = async (params) => {
    try {
      let { title } = params;

      let filterOptions = {
        where: {},
        include: [
          {
            model: Category,
            as: 'categories'
          },
          {
            model: Comment,
            as: 'comments'
          }
        ]
      };

      let titleFilter = {};

      if (title)
        titleFilter = {
          title: {
            [Op.iLike]: `%${title}%`
          }
        };

      filterOptions.where = {
        ...titleFilter
      };

      const posts = await Post.findAll(filterOptions);
      return posts;
    } catch (err) {
      throw err;
    }
  };

  static findOne = async (id) => {
    try {
      const filterOptions = {
        where: {
          id
        },
        include: [
          {
            model: Category,
            as: 'categories'
          },
          {
            model: Comment,
            as: 'comments'
          }
        ]
      };

      const post = await Post.findOne(filterOptions);
      if (!post) throw { name: 'ErrorNotFound', message: 'Post Not Found' };

      return post;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const post = await Post.create(params, {
        returning: true
      });
      return post;
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;
      const userId = params.body.userId;

      const post = await Post.findOne({
        where: {
          id,
          userId
        }
      });

      if (!post) throw { name: 'ErrorNotFound', message: 'Post not found' };

      const updatedPost = await post.update(body);
      return updatedPost;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id, userId) => {
    try {
      const filterOptions = {
        where: {
          id,
          userId
        }
      };
      const post = await Post.findOne(filterOptions);

      if (!post) throw { name: 'ErrorNotFound', message: 'Post not found' };

      const deletedPost = await post.destroy();
      return deletedPost;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = PostService;
