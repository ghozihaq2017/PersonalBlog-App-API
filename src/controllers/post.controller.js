const { successResponse } = require('../responses/response.js');
const PostService = require('../services/post.service.js');

class PostController {
  // List All Post
  static findAll = async (req, res, next) => {
    try {
      const posts = await PostService.findAll(req.query);

      res.status(200).json(successResponse(posts, 'Get all Posts success'));
    } catch (err) {
      next(err);
    }
  };

  // List Post by id
  static findOne = async (req, res, next) => {
    try {
      const post = await PostService.findOne(req.params.id);

      res.status(200).json(successResponse(post, 'Get detail Post success'));
    } catch (err) {
      next(err);
    }
  };

  // Add Post
  static create = async (req, res, next) => {
    try {
      const post = await PostService.create(req.body);

      res.status(201).json(successResponse(post, 'Post added successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Update Post
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body
      };

      const post = await PostService.update(params);

      res.status(200).json(successResponse(post, 'Post updated successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Delete Movie
  static destroy = async (req, res, next) => {
    try {
      const deletedPost = await PostService.destroy(req.params.id);

      res.status(200).json(successResponse(deletedPost, 'Post deleted successfully'));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = PostController;
