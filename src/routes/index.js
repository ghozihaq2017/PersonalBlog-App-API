const express = require('express');
const router = express.Router();
const postRoute = require('./post.route.js');
const categoryRoute = require('./category.route.js');
const commentRoute = require('./comment.route.js');

router.use('/api/posts', postRoute);

router.use('/api/categories', categoryRoute);

router.use('/api/comments', commentRoute);

module.exports = router;
