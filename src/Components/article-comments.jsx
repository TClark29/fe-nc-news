import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/user-context";
import { getCommentsByArticleId} from "../../api";
import LoadingMessage from "./Loading-Message";
import CommentPostForm from "./comment-post-form.jsx";


function ArticleComments(props){

    const { currentUser } = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [commentsLoading, setCommentsLoading] = useState(true)
    const articleId = props.articleId
    

    useEffect(()=>{
        setCommentsLoading(true)
        getCommentsByArticleId(articleId)
        .then((response)=>{
            setComments(response.comments)
            setCommentsLoading(false)
        })
    }, [currentUser])



if (commentsLoading){
    return (
        <LoadingMessage element='comments'></LoadingMessage>
    )
}

else{


    return (
        <>
        <CommentPostForm setComments={setComments} articleId={articleId}></CommentPostForm>
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
                                        <button className='comment-button'>Vote Up!</button>
                                        <button className='comment-button'>Vote Down!</button>
                                    </>}

                                </section>    
                                    :<></>}
                           
                         
                    </div>
                )
            })}
        </ul>
        </>
    )
    
}

}

export default ArticleComments