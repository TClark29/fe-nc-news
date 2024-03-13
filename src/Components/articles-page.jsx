import { useContext, useState } from "react"
import { useEffect } from "react"
import { getArticles } from "../../api"
import ArticlesList from "./articles-list"
import UserContext from "../Contexts/user-context"
import LoadingMessage from "./Loading-Message"


function ArticlesPage(){

    const {currentUser} = useContext(UserContext)

    const [articles, setArticles] = useState([])
    const [articlesLoading, setArticlesLoading] = useState(true)

    useEffect(()=>{
        getArticles()
        .then((response)=>{
            setArticlesLoading(false)
            setArticles(response.articles)
            
        })
    }, [currentUser])

    if (articlesLoading){
        return (
            <LoadingMessage element='articles'></LoadingMessage>
        )
    }
    else{

    return (<>

    <ArticlesList articles={articles} setArticles={setArticles}/>
    
    </>)
}

}

export default ArticlesPage