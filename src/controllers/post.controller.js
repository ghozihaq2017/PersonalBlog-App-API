const { successResponse } = require('../responses/response.js');
const PostService = require('../services/post.service.js');
const upload = require('../middlewares/upload.js');

class PostController {
  // List All Posts
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
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      try {
        const imagePath = req.file ? `http://localhost:5000/uploads/${req.file.filename}` : null;
        const params = { ...req.body, imgUrl: imagePath };
        const post = await PostService.create(params);
        res.status(201).json(successResponse(post, 'Post added successfully'));
      } catch (err) {
        next(err);
      }
    });
  };

  // Update Post
  static update = async (req, res, next) => {
    upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ message: err });
      }
      try {
        const params = {
          id: req.params.id,
          body: req.body,
          filePath: req.file ? req.file.path : null
        };
        const post = await PostService.update(params);
        res.status(200).json(successResponse(post, 'Post updated successfully'));
      } catch (err) {
        next(err);
      }
    });
  };

  // Delete Post
  static destroy = async (req, res, next) => {
    try {
      const deletedPost = await PostService.destroy(req.params.id);
      res.status(200).json(successResponse(deletedPost, 'Post deleted successfully'));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = PostController
