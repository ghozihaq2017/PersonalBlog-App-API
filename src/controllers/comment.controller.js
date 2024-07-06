const { successResponse } = require('../responses/response.js');
const CommentService = require('../services/comment.service.js');

class CommentController {
  // List All Comment
  static findAll = async (req, res, next) => {
    try {
      const comments = await CommentService.findAll();

      res.status(200).json(successResponse(comments, 'Get all Comments success'));
    } catch (err) {
      next(err);
    }
  };

  // List Comment by id
  static findOne = async (req, res, next) => {
    try {
      const comment = await CommentService.findOne(req.params.id);

      res.status(200).json(successResponse(comment, 'Get detail Comment success'));
    } catch (err) {
      next(err);
    }
  };

  // Add Comment
  static create = async (req, res, next) => {
    try {
      const comment = await CommentService.create(req.body);

      res.status(201).json(successResponse(comment, 'Comment added successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Update Comment
  static update = async (req, res, next) => {
    try {
      const params = {
        id: req.params.id,
        body: req.body
      };

      const comment = await CommentService.update(params);

      res.status(200).json(successResponse(comment, 'Comment updated successfully'));
    } catch (err) {
      next(err);
    }
  };

  // Delete Movie
  static destroy = async (req, res, next) => {
    try {
      const deletedComment = await CommentService.destroy(req.params.id);

      res.status(200).json(successResponse(deletedComment, 'Comment deleted successfully'));
    } catch (err) {
      next(err);
    }
  };
}

module.exports = CommentController;
