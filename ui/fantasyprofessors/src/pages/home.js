import React from "react";
import ArticleCard from "../components/articles/articleCard";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'


const Home = () => {
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
        },
        {
            _id: '3',
            title: "Title3",
            author: "Author2",
            // date: 01/01/2021,
            image: "https://logos-world.net/wp-content/uploads/2020/05/Kansas-City-Chiefs-logo.png",
            teaser: "This is a test teaser. Lots of text in this sentence.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: ["test", "article", "testing"]
        },
        {
            _id: '4',
            title: "Title4",
            author: "Author2",
            // date: 01/01/2021,
            image: "https://logos-world.net/wp-content/uploads/2020/05/Kansas-City-Chiefs-logo.png",
            teaser: "This is a test teaser. Lots of text in this sentence.",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: ["test", "article", "testing"]
        }

        
    ]

    const breakPoints = [{width: 1, itemsToShow: 1}]

    return (
        <div style={{backgroundColor: 'black'}}>
            <Carousel>
                {ARTICLES.map(article => {
                    return (
                        <Carousel.Item>
                            <img className="d-block w-100" src={article.image} alt={article.title} style={{width: '100%', maxWidth: '1200px', maxHeight: '615px', margin: 'auto'}}/>
                            <Carousel.Caption>
                                <h5>{article.title}</h5>
                                <p>{article.teaser}</p>
                                <Link to={`article/${article._id}`}><Button variant="contained" color="error">View More</Button></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    ) 
}

export default Home;