import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getArticleById } from '../../api'
import ArticleContent from './article-content'
import ArticleComments from './article-comments'
import LoadingMessage from './Loading-Message'
import ErrorPage from './error-page'



function ArticleSingle(){
    
    const { id } = useParams()
    
    const [articleId, setArticleId] = useState(id)
    const [article, setArticle] = useState(null)
    const [articleLoading, setArticleLoading] = useState(true)
    const [error, setError] = useState(null)
    

    useEffect(()=>{
        setArticleLoading(true)
        
        
        getArticleById(articleId)
        .then((response)=>{
           setArticleLoading(false)
            setArticle(response.article)
            
                
           
            
           
        })
        .catch((err)=>{
            console.log(err, 'catch')
            setError(err.message)
            setArticleLoading(false)
            
            
        })
    }, [])

    if (articleLoading){
        return(
            <LoadingMessage element='article'></LoadingMessage>
        )
    }
    else{

    if(error){
        return (
            <ErrorPage error={error}></ErrorPage>
        )
    }

    return(
        
        <div className='article-page'>
        <ArticleContent article={article} setArticle={setArticle}></ArticleContent>
        <ArticleComments articleId={articleId}></ArticleComments>
        </div>
    )
    }
}

export default ArticleSingle