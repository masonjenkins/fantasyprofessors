const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController')

router.get('/', articlesController.getArticles);

router.get('/search/:aid', articlesController.getArticleById);

module.exports = router;