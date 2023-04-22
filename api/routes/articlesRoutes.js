const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController')

router.get('/', articlesController.getArticles);

router.get('/search/:aid', articlesController.getArticleById);

router.post('/create', articlesController.createArticle);

router.patch('/:aid', articlesController.editArticle);

router.delete('/:aid', articlesController.deleteArticle);

module.exports = router;