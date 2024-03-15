import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { updateArticleVotes } from "../../api";
import UserContext from "../Contexts/user-context";




 
function ArticlesList(props){
    const articles = props.articles
    const setArticles = props.setArticles
    const navigate = useNavigate()
    const [articleVoteErr, setArticleVoteErr] = useState(null)

    const {currentUser} = useContext(UserContext)

   function linkToArticle(event, id){ 
        event.cancelBubble = true;
        if(event.stopPropagation) event.stopPropagation()
        navigate(`/article/${id}`)
    }    
      
       
    

       
        
    
    function voteHandler(event, votes){
        event.stopPropagation()
        setArticleVoteErr(null)
        const article_id = Number(event.target.value)
        let articlesClone = structuredClone(articles)

        articlesClone.forEach((article)=>{
            if (article.article_id === article_id){
              article.votes = article.votes + votes
                }
            })

       setArticles(articlesClone)
       updateArticleVotes(article_id, votes)
       .catch(()=>{
        articlesClone.forEach((article)=>{
            if (article.article_id === article_id){
              article.votes = article.votes - votes
                }
            })
        setArticles(articlesClone)
        setArticleVoteErr('Something went wrong with your vote')
       })
      


    }
   
    

    return (<ul className='article-list'>
        {articles.map((article)=>{
            return(
                <li tabIndex='0' className='article-card' value={article.article_id} key={article.article_id} onClick={(e)=>linkToArticle(e,article.article_id)}> 

                    <div className="article-box-1">
                        <img className='article-img' src={article.article_img_url} alt={`A picture for the article ${article.title}`} />
                        
                        <div className='article-card-vote-box'>
                            {currentUser!==null&&currentUser.username!==article.author?<button value={article.article_id} className="article-up, styled-button" onClick={(e)=>voteHandler(e, 1)}>Vote up!</button>:null}
                            
                            <p className={'article-votes'}>{article.votes}</p>
                            {currentUser!==null&&currentUser.username!==article.author?<button value={article.article_id} className='article-down, styled-button'onClick={(e)=>voteHandler(e, -1)}>Vote down!</button>:null}
                            
                        </div>
                        <p className="article-list-vote-err">{articleVoteErr}</p>
                        {currentUser!==null&&currentUser.username===article.author?<button className="article-delete, styled-button">Delete my article</button>:null}
                    </div>
                    
                    <div className='article-box-2'>
                        <h2 className='article-title'>{article.title}</h2>
                        <br></br>
                        <p className='article-author'>By {article.author}</p>
                        <p className='article-date'>{article.created_at.slice(0,10)}</p>
                        <p className="article-comment-count">Comments: {article.comment_count}</p>
                        
                    </div>

                    
                    
                </li>
            )
        })}


    </ul>)



}

export default ArticlesList

