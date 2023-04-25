import React from "react";
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";


import "./articleCard.css";
import secrets from "../../secrets";

const ArticleCard = props => {
    console.log(props)
    return (
            <div className="card-content">
                
                    <Card>
                        <CardActionArea>
                        <Link to={`/article/${props.id}`}>
                                <CardMedia component="img" image={`${secrets.IMAGES_URL}/${props.image}`} alt={props.title} maxHeight= {window.innerWidth > 800 ? '400' : '250'}/>
                            <CardContent>
                                <Typography gutterBottom variant='h4' component='div'>{props.title}</Typography>
                                <Typography variant='body2' color='text.secondary'>{props.teaser}</Typography>
                            </CardContent>
                        </Link>
                        </CardActionArea>
                    </Card>
                    
                
            </div>
    )
}

export default ArticleCard;