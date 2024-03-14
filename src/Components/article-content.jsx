
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import ArticleVotes from "./article-votes"



function ArticleContent(props){
    
    const article = props.article
    const setArticle = props.setArticle
    
    const navigate = useNavigate()

    

    function handleArticleNavButton(){
        navigate('/all')

    }


if (article!==null){


    return (
        <div className="article-content">
            <h1 className="article-header">{article.title}</h1>
                <div className="article-info"><p>By {article.author}</p><p>{article.created_at.slice(0,10)}</p></div>
            
            <img className = 'single-article-image'src={article.article_img_url} alt={`A picture for the article ${article.title}`} />
            <p className="article-text">{article.body}</p>
            <ArticleVotes id='article-votes' article={article} setArticle={setArticle}></ArticleVotes>
            
            <button onClick={handleArticleNavButton}>Return to articles</button>
        </div>
    )
}
}

export default ArticleContent