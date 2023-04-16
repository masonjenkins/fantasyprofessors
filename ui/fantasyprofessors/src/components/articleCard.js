import React from "react";

import "./articleCard.css";

const ArticleCard = props => {
    return (
        <li className="articleCard">
            <div className="card-content">
                <div className="card-image">
                    <img src={props.image} alt={props.name}/>
                </div>
                <div className="card-info">
                    <h2>{props.name}</h2>
                    <h2>{props.author}</h2>
                    <h2>{props.teaser}</h2>
                </div>
            </div>
        </li>
    )
}

export default ArticleCard;