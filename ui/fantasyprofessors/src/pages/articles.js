import React, { useEffect, useState } from "react";
import ArticleList from "../components/articles/articleList";
import API_URL from "../secrets";

 
const Articles = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState()


    useEffect(() => {
        const fetchArticles = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${API_URL}/articles`)
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
    
// eslint-disable-next-line
    {return !isLoading && data && <ArticleList items={data}/>}
}

export default Articles;