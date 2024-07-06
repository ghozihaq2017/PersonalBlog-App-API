const { successResponse } = require('../responses/response.js');
const CategoryService = require('../services/category.service.js');

class CategoryController {
  // List All Category
  static findAll = async (req, res, next) => {
    try {
      const categories = await CategoryService.findAll(req.query);

      res.status(200).json(successResponse(categories, 'Get all Categorys success'));
    } catch (err) {
      next(err);
    }
  };

  // List Category by id
  static findOne = async (req, res, next) => {
    try {
      const category = await CategoryService.findOne(req.params.id);

      res.status(200).json(successResponse(category, 'Get detail Category success'));
    } catch (err) {
      next(err);
    }
  };

  // Add Category
  static create = async (req, res, next) => {
    try {
      const category = await CategoryService.create(req.body);

      res.status(201).json(successResponse(category, 'Category added successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Add Category To Post
  static addCategoryToPost = async (req, res, next) => {
    try {
      const categoryToPost = await CategoryService.addCategoryToPost(req.body);

      res.status(201).json(successResponse(categoryToPost, 'Category added successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Update Category
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body
      };

      const category = await CategoryService.update(params);

      res.status(200).json(successResponse(category, 'Category updated successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Delete Movie
  static destroy = async (req, res, next) => {
    try {
      const deletedCategory = await CategoryService.destroy(req.params.id);

      res.status(200).json(successResponse(deletedCategory, 'Category deleted successfully'));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = CategoryController;
