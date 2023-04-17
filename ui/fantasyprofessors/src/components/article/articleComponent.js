import React from "react";

const ArticleComponent = props => {
    if(props.item.length === 0) {
        return (<h2>This article could not be found.</h2>)
    }
    return (

        
    <div>
        <img src={props.item.image} alt={props.item.title} />

        <div>
            <h2>{props.item.title}</h2>
            <h4>{props.item.author}</h4>
            <h5>{props.item.date}</h5>
        </div>

        <div>
            <p>{props.item.body}</p>
        </div>
    </div>
    )
}

export default ArticleComponent;