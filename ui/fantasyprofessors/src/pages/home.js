import React, { useEffect, useState } from "react";
import ArticleList from "../components/articles/articleList";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Divider } from '@mui/material'
import { Link } from 'react-router-dom'


const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/articles`)
                const responseData = await response.json()

                if(!response.ok) {
                    throw new Error(responseData.message)
                }

                setData(responseData.articles)
            } catch (e) {
                throw new Error(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchArticles()
    }, [])
    

    

    return (
        <>
        <div style={{backgroundColor: 'black'}}>
            <Carousel>
                {!isLoading && data && data.map(article => {
                    return (
                        <Carousel.Item>
                            <img className="d-block w-100" src={article.image} alt={article.title} style={{width: '100%', maxWidth: '1200px', maxHeight: '615px', margin: 'auto'}}/>
                            <Carousel.Caption>
                                <h5>{article.title}</h5>
                                <p>{article.teaser}</p>
                                <Link to={`article/${article._id}`}><Button variant="contained" color="primary"><strong>View More</strong></Button></Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
         {!isLoading && data && <div>
             <br />
             <Divider component={'h2'}/>
             <br />
             <h2 style={{textAlign: 'center'}}>RECENT ARTICLES</h2>
             <br />
             <ArticleList items={data} />
             <br />
             <br />
             <br />
        </div>}
        </>
) 
}

export default Home;