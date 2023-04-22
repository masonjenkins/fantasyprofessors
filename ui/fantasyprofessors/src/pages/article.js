import React from "react";
import { useParams } from 'react-router-dom'; 

import ArticleComponent from "../components/article/articleComponent";


const ARTICLES = [
    {
        _id: '1',
        title: "Title1",
        author: "Author1",
        // date: 01/01/2020,
        image: "https://www.profootballnetwork.com/wp-content/uploads/2021/02/nfl-logo-shield-history-design-meaning.jpg",
        teaser: "This is a test teaser. Lots of text in this sentence.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["test", "article", "testing"]
    },
    {
        _id: '2',
        title: "Title2",
        author: "Author2",
        // date: 01/01/2021,
        image: "https://logos-world.net/wp-content/uploads/2020/05/Kansas-City-Chiefs-logo.png",
        teaser: "This is a test teaser. Lots of text in this sentence.",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["test", "article", "testing"]
    }
]

const Article = () => {
   
    const articleId = useParams().articleId;
    const filteredArticle = ARTICLES.filter(article => articleId === article._id)
    console.log(filteredArticle)
    return <ArticleComponent item={filteredArticle[0]} />
}

export default Article;