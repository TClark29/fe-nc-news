import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticleById } from '../../api'
import ArticleContent from './article-content'
import ArticleComments from './article-comments'
import LoadingMessage from './Loading-Message'



function ArticleSingle(){
    
    const { id } = useParams()
    
    const [articleId, setArticleId] = useState(id)
    const [article, setArticle] = useState(null)
    const [articleLoading, setArticleLoading] = useState(true)

    useEffect(()=>{
        setArticleLoading(true)
        getArticleById(articleId)
        .then((response)=>{
            setArticleLoading(false)
            setArticle(response.article)
        })
    }, [])

    if (articleLoading){
        return(
            <LoadingMessage element='article'></LoadingMessage>
        )
    }
    else{

    

    return(
        
        <div className='article-page'>
        <ArticleContent article={article} setArticle={setArticle}></ArticleContent>
        <ArticleComments articleId={articleId}></ArticleComments>
        </div>
    )
    }
}

export default ArticleSingle