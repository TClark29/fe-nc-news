import { useContext, useState } from "react"
import { useEffect } from "react"
import { getArticles } from "../../api"
import ArticlesList from "./articles-list"
import ArticlesNav from "./articles-nav-bar"
import UserContext from "../Contexts/user-context"
import LoadingMessage from "./Loading-Message"
import { useParams, useSearchParams } from "react-router-dom"



function ArticlesPage(){

    const {currentUser} = useContext(UserContext)

    const [articles, setArticles] = useState([])
    const [articlesLoading, setArticlesLoading] = useState(true)
    const [selectedTopic, setSelectedTopic] = useState('all')
    const [searchParams, setSearchParams] = useSearchParams()

    console.log(searchParams)
    console.log(searchParams.get('topic'))


    

    useEffect(()=>{
        setArticlesLoading(true)
        setSelectedTopic(searchParams.get('topic'))
        getArticles(selectedTopic)
        .then((response)=>{
            setArticlesLoading(false)
            setArticles(response.articles)
            
        })
    }, [selectedTopic])

    if (articlesLoading){
        return (
            <LoadingMessage element='articles'></LoadingMessage>
        )
    }
    else{

    return (<>
    <ArticlesNav setSelectedTopic={setSelectedTopic} setSearchParams={setSearchParams}></ArticlesNav>
    <ArticlesList articles={articles} setArticles={setArticles}/>
    
    </>)
}

}

export default ArticlesPage