import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ArticleContent from './article-content'
import ArticleComments from './article-comments'


function ArticleSingle(){
    
    const { id } = useParams()
    const [articleId, setArticleId] = useState(id)

    

    return(
        <div className='article-page'>
        <ArticleContent articleId={articleId}></ArticleContent>
        <ArticleComments articleId={articleId}></ArticleComments>
        </div>
    )
}

export default ArticleSingle