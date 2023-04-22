import React from "react";

const ArticleComponent = props => {
    if(!props.item || props.item.length === 0) {
        return (<h2>This article could not be found.</h2>)
    }
    return (

        
    <div>
        <br />
        <div style={{backgroundColor: 'black'}}>
            <img src={props.item.image} style={{maxWidth: '75%', marginLeft: 'auto', marginRight: 'auto', display: 'block'}} />
        </div>
        <br />
        <div style={{textAlign: 'center'}}>
            <h2>{props.item.title}</h2>
            <h4>{props.item.author}</h4>
            <h5>{props.item.date}</h5>
        </div>

        <div className="container">
            <p>{props.item.body}</p>
        </div>
    </div>
    )
}

export default ArticleComponent;