const HttpError = require('../models/httpError')

const testArticles = [
    {
        _id: '1',
        title: "Title1",
        author: "Author1",
        date: 01/01/2020,
        image: "https://www.profootballnetwork.com/wp-content/uploads/2021/02/nfl-logo-shield-history-design-meaning.jpg",
        teaser: "This is a test teaser. Lots of text in this sentence.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["test", "article", "testing"]
    },
    {
        _id: '2',
        title: "Title2",
        author: "Author2",
        date: 01/01/2021,
        image: "https://logos-world.net/wp-content/uploads/2020/05/Kansas-City-Chiefs-logo.png",
        teaser: "This is a test teaser. Lots of text in this sentence.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["test", "article", "testing"]
    }
]


const getArticleById = (req, res, next) => {
    const articleId = req.params.aid;
    const article = testArticles.find(art => {
        return art._id === articleId;
    });

    if (!article) {
        return next(new HttpError('Article not found.', 404));
    }

    res.json({articles: article});
}

const getArticles = (req, res, next) => {
    res.json({articles: testArticles})
}

exports.getArticleById = getArticleById;
exports.getArticles = getArticles;