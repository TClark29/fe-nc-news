import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/user-context";
import { getCommentsByArticleId, getUsers } from "../../api";


function ArticleComments(props){

    const { currentUser } = useContext(UserContext)
    const [comments, setComments] = useState([])
    const articleId = props.articleId
    

    useEffect(()=>{
        getCommentsByArticleId(articleId)
        .then((response)=>{
            setComments(response.comments)
        })
    }, [currentUser])






    return (
        
        <ul id="comment-list">
            {comments.map((comment)=>{
                return (
                    <div className='comment' key={comment.comment_id}>
                    
                        
                        <h3 className='comment-header'>{comment.author}</h3>
                        <p >{comment.body}</p>
                        {currentUser!==null? 
                            <section className='comment-buttons'>
                                {comment.author===currentUser.username?
                                    <> 
                                        <p>{comment.votes}</p>
                                        <button>Delete My Comment</button>
                                    </>:
                                    <>
                                        <p>{comment.votes}</p>
                                        <button class='comment-button'>Vote Up!</button>
                                        <button class='comment-button'>Vote Down!</button>
                                    </>}

                                </section>    
                                    :<></>}
                           
                         
                    </div>
                )
            })}
        </ul>
    )
    


}

export default ArticleComments