import { useContext,useState } from "react";
import UserContext from "../Contexts/user-context";
import { updateArticleVotes } from "../../api"

function ArticleVotes(props){
    const article = props.article
    const setArticle = props.setArticle
    const {currentUser} = useContext(UserContext)
    const [voteErr, setVoteErr] = useState(null)

    function voteHandler(event,votes){
        setVoteErr(null)
        const articleCopy = structuredClone(article)
        articleCopy.votes = articleCopy.votes + votes
        setArticle(articleCopy)
        updateArticleVotes(article.article_id, votes)
        .catch(()=>{
            
            articleCopy.votes = articleCopy.votes - votes
            setArticle(articleCopy)
            setVoteErr('Something went wrong with your vote!')
        })



    }

    if (article!==null && currentUser!==null){
        
return currentUser.username!==article.author?(
    <> 
        <p className="article-vote-err">{voteErr}</p>
        <div className="article-vote-buttons">
            <button className="article-up, styled-button" onClick={(event)=>voteHandler(event,1)}>Vote up!</button>
            <p className={'article-votes'}>{article.votes}</p>
            <button className='article-down, styled-button' onClick={(event)=>voteHandler(event,-1)}>Vote down!</button>
        </div>
     </>   
    ):<button className="styled-button">Delete My Article</button>
}

}

export default ArticleVotes

