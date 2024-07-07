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

  static create = async (params, filePath) => {
    try {
      const data = {
        ...params,
        img_url: filePath
      };

      const post = await Post.create(data, {
        returning: true
      });

      return post;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body, filePath } = params;

      const post = await Post.findOne({
        where: {
          id,
        }
      });

      if (!post) throw { name: 'ErrorNotFound', message: 'Post not found' };

      const data = {
        ...body,
      };

      if (filePath) {
        data.img_url = filePath;
      }

      const updatedPost = await post.update(data);
      return updatedPost;
    } catch (err) {
      throw err;
    }
  };

  static destroy = async (id) => {
    try {
      const filterOptions = {
        where: {
          id,
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
