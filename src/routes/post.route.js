const express = require('express');
const router = express.Router();
const PostController = require('../controllers/post.controller');

router.get('/', PostController.findAll);

router.get('/:id', PostController.findOne);

router.post('/', PostController.create);

router.put('/:id', PostController.update);

router.delete('/:id', PostController.destroy);

module.exports = router;
