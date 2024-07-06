const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/comment.controller');

router.get('/', CommentController.findAll);

router.get('/:id', CommentController.findOne);

router.post('/', CommentController.create);

router.put('/:id', CommentController.update);

router.delete('/:id', CommentController.destroy);

module.exports = router;
