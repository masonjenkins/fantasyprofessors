import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'; 

import ArticleComponent from "../components/article/articleComponent";


const Article = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()

    const articleId = useParams().articleId;

    useEffect(() => {
        const fetchArticle = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${process.env.REACT_APP_API_URL}/articles/search/${articleId}`)
                const responseData = await response.json()

                if (!response.ok) {
                    throw new Error(responseData.message)
                }

                setData(responseData.articles)
            } catch (e) {
                throw new Error(e.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchArticle()
    },[])
// eslint-disable-next-line
    {return !isLoading && data && <ArticleComponent item={data} />}
}

export default Article;