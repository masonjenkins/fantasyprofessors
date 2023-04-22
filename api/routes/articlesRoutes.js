const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController')

router.get('/', articlesController.getArticles);

router.get('/search/:aid', articlesController.getArticleById);

router.post('/create', articlesController.createArticle);

module.exports = router;