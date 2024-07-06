const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category.controller');

router.get('/', CategoryController.findAll);

router.get('/:id', CategoryController.findOne);

router.post('/', CategoryController.create);

router.post('/addToPost', CategoryController.addCategoryToPost);

router.put('/:id', CategoryController.update);

router.delete('/:id', CategoryController.destroy);

module.exports = router;
