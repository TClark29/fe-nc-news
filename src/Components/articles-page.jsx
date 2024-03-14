import { useContext, useState } from "react"
import { useEffect } from "react"
import { getArticles } from "../../api"
import ArticlesList from "./articles-list"
import ArticlesNav from "./articles-nav-bar"
import UserContext from "../Contexts/user-context"
import LoadingMessage from "./Loading-Message"
import { useParams, useSearchParams } from "react-router-dom"



function ArticlesPage(){

 

    const [articles, setArticles] = useState([])
    const [articlesLoading, setArticlesLoading] = useState(true)
    const [selectedTopic, setSelectedTopic] = useState('all')
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterButtonPressed, setFilterButtonPressed] = useState(false)


let {topic} = useParams()
    

    useEffect(()=>{
        setArticlesLoading(true)
        const sortBy = searchParams.get('sortBy')
        const order = searchParams.get('order')
        
        getArticles(topic, sortBy, order)
        .then((response)=>{
            
            setArticlesLoading(false)
            setArticles(response.articles)
            setFilterButtonPressed(false)
            
        })
        .catch((err)=>
        console.log(err))
    }, [selectedTopic, searchParams, filterButtonPressed])

    if (articlesLoading){
        return (
            <LoadingMessage element='articles'></LoadingMessage>
        )
    }
    else{

    return (<>
    <ArticlesNav setFilterButtonPressed={setFilterButtonPressed} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSearchParams={setSearchParams}></ArticlesNav>
    <ArticlesList articles={articles} setArticles={setArticles}/>
    
    </>)
}

}

export default ArticlesPage