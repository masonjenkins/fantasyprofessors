import React from "react";
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";


import "./articleCard.css";

const ArticleCard = props => {
    return (
            <div className="card-content">
                
                    <Card sx={{ maxWidth: 300 }}>
                        <CardActionArea>
                        <Link to={`/article/${props.id}`}>
                                <CardMedia component="img" image={props.image} alt={props.title} height='250'/>
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