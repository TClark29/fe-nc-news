import { useContext, useState } from "react"
import { useEffect } from "react"
import { getArticles, getTopics } from "../../api"
import ArticlesList from "./articles-list"
import ArticlesNav from "./articles-nav-bar"
import UserContext from "../Contexts/user-context"
import LoadingMessage from "./Loading-Message"
import { useParams, useSearchParams } from "react-router-dom"
import ErrorPage from "./error-page"



function ArticlesPage(){

 
    const [topics, setTopics] = useState([])
    const [articles, setArticles] = useState([])
    const [articlesLoading, setArticlesLoading] = useState(true)
    const [selectedTopic, setSelectedTopic] = useState('all')
    const [searchParams, setSearchParams] = useSearchParams()
    const [filterButtonPressed, setFilterButtonPressed] = useState(false)
    const [allowedTopics, setAllowedTopics] = useState([])


let {topic} = useParams()
    
useEffect(()=>{
    getTopics()
    .then((response)=>{
        const topicList = ['all']
        response.topics.forEach((topic)=>{
            topicList.push(topic.slug)

        })
        setAllowedTopics(topicList)
        setTopics(response.topics)

        
        
    })

}, [])

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
        .catch((err)=>{}
        )
    }, [selectedTopic, searchParams, filterButtonPressed, topic])

    if (articlesLoading){
        return (
            <LoadingMessage element='articles'></LoadingMessage>
        )
    }
    else{
         
        if(topic!==undefined&&!allowedTopics.includes(topic)){
            console.log(topic, topics)
            return (
                <ErrorPage></ErrorPage>
            )
        }


        return (<>
        <ArticlesNav topics={topics} setFilterButtonPressed={setFilterButtonPressed} selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} setSearchParams={setSearchParams}></ArticlesNav>
        <ArticlesList articles={articles} setArticles={setArticles}/>
    
        </>)
}

}

export default ArticlesPage