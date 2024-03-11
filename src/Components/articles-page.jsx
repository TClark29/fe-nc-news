import { useState } from "react"
import { useEffect } from "react"
import { getArticles } from "../../api"
import ArticlesList from "./articles-list"

function ArticlesPage(){

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        getArticles()
        .then((response)=>{
            setArticles(response.articles)
            
        })
    }, [])

    

    return (<>

    <ArticlesList articles={articles}/>
    
    </>)


}

export default ArticlesPage