const { Op } = require('sequelize');
require('dotenv').config();
const { Category, Post } = require('../../models');

class CategoryService {
  static findAll = async (params) => {
    try {
      let { name } = params;

      let filterOptions = {
        where: {},
        include: {
          model: Post,
          as: 'posts'
        }
      };

      let nameFilter = {};

      if (name)
        nameFilter = {
          name: {
            [Op.iLike]: `%${name}%`
          }
        };

      filterOptions.where = {
        ...nameFilter
      };

      const categories = await Category.findAll(filterOptions);
      return categories;
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
        include: {
          model: Post,
          as: 'posts'
        }
      };

      const category = await Category.findOne(filterOptions);
      if (!category) throw { name: 'ErrorNotFound', message: 'Category Not Found' };

      return category;
    } catch (err) {
      throw err;
    }
  };

  static create = async (params) => {
    try {
      const category = await Category.create(params, {
        returning: true
      });
      return category;
    } catch (err) {
      throw err;
    }
  };

  static update = async (params) => {
    try {
      const { id, body } = params;
      const category = await Category.findOne({
        where: {
          id
        }
      });

      if (!category) throw { name: 'ErrorNotFound', message: 'Category not found' };

      const updatedCategory = await category.update(body);
      return updatedCategory;
    } catch (err) {
      throw err;
    }
  };

  static addCategoryToPost = async (params) => {
    try {
      const { postId, categoryId } = params;

      const post = await Post.findByPk(postId);
      if (!post) throw { name: 'ErrorNotFound', message: 'Post not found' };

      const category = await Category.findByPk(categoryId);
      if (!category) throw { name: 'ErrorNotFound', message: 'Category not found' };

      await post.addCategory(category);

      return { postId, categoryId };
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
      const category = await Category.findOne(filterOptions);

      if (!category) throw { name: 'ErrorNotFound', message: 'Category not found' };

      const deletedCategory = await category.destroy();
      return deletedCategory;
    } catch (err) {
      throw err;
    }
  };
}

module.exports = CategoryService;
