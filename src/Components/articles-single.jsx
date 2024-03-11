import { useParams } from 'react-router-dom'
import ArticleContent from './article-content'
import { useState } from 'react'

function ArticleSingle(){
    
    const { id } = useParams()
    const [articleId, setArticleId] = useState(id)

    

    return(
        <div className='article-page'>
        <ArticleContent articleId={articleId}></ArticleContent>
        </div>
    )
}

export default ArticleSingle