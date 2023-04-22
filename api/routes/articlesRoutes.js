const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const articlesController = require('../controllers/articlesController');


router.get('/', articlesController.getArticles);

router.get('/search/:aid', articlesController.getArticleById);

router.post('/create', 
    [check('title').not().isEmpty(),
    check('author').not().isEmpty(),
    check('date').not().isEmpty(),
    check('image').not().isEmpty(),
    check('teaser').not().isEmpty(),
    check('body').not().isEmpty(),
    check('tags').not().isEmpty()
    ], articlesController.createArticle);

router.patch('/:aid', check('id').not().isEmpty(), articlesController.editArticle);

router.delete('/:aid', articlesController.deleteArticle);

module.exports = router;