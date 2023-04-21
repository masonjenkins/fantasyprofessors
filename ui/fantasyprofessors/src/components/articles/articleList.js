import React from "react";
import "./articleList.css";
import ArticleCard from "./articleCard";
import Grid from "@mui/material/Grid";

const ArticleList = props => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                <h1>No articles found in the database.</h1>
            </div>
        )
    }

    return ( 
        <div>
            <h2></h2>
            <Grid container spacing={2} sx={{margin: "auto", maxWidth: '80%', textAlign: 'center'}}>
                {props.items.map(article => {
                    return (
                        <Grid item xs={12} sm={6}>
                            <ArticleCard id={article._id} title={article.title} author={article.author} date={article.date} image={article.image} teaser={article.teaser} body={article.body} tags={article.tags} />
                        </Grid>
                    )
                })}   
            </Grid>
        </div>
    )
}

export default ArticleList;