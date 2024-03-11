import { useNavigate } from "react-router-dom"
import React from "react";



 
function ArticlesList(props){
    const articles = props.articles
    const navigate = useNavigate()

   function linkToArticle(event, id){ 
        event.cancelBubble = true;
        if(event.stopPropagation) event.stopPropagation()
        navigate(`/article/${id}`)
    }    
      
       

        
        
    
    function voteHandler(event){
        event.cancelBubble = true;
        if(event.stopPropagation) event.stopPropagation()

        console.log(event, 2)
    }
   
    

    return (<ul className='article-list'>
        {articles.map((article)=>{
            return(
                <div className='article-card' value={article.article_id} key={article.article_id} onClick={(e)=>linkToArticle(e,article.article_id)}> 

                    <div className="article-box-1">
                        <img className='article-img' src={article.article_img_url} alt={`A picture for the article ${article.title}`} />
                        <button className="article-up" onClick={(e)=>voteHandler(e)}>Vote up!</button>
                        <p className={'article-votes'}>{article.votes}</p>
                        <button className='article-down'>Vote down!</button>
                    </div>
                    
                    <div className='article-box-2'>
                        <h2 className='article-title'>{article.title}</h2>
                        <br></br>
                        <p className='article-author'>By {article.author}</p>
                        <p className='article-date'>{article.created_at.slice(0,10)}</p>
                        <p className="article-comment-count">Comments: {article.comment_count}</p>
                        <button className="article-delete">Delete</button>
                    </div>

                    
                    
                </div>
            )
        })}


    </ul>)



}

export default ArticlesList

