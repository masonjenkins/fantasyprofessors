import React from "react";

import "./articleList.css";
import ArticleCard from "./articleCard";

const ArticleList = props => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                <h1>No articles found in the database.</h1>
            </div>
        )
    }

    return ( 
        <ul className="articleList">
            {props.items.map(article => {
                return <ArticleCard id={article._id} title={article.title} author={article.author} date={article.date} image={article.image} teaser={article.teaser} body={article.body} tags={article.tags} />
            })}
        </ul>
    )
}

export default ArticleList;