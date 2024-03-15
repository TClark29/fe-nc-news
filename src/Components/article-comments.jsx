import { useContext, useEffect, useState } from "react";
import UserContext from "../Contexts/user-context";
import { getCommentsByArticleId} from "../../api";
import LoadingMessage from "./Loading-Message";
import CommentPostForm from "./comment-post-form.jsx";
import { deleteComment } from "../../api";



function ArticleComments(props){

    const { currentUser } = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [commentsLoading, setCommentsLoading] = useState(true)
    const articleId = props.articleId
    const [commentDeleteLoading, setCommentDeleteLoading] = useState(false)
   
    
    

    useEffect(()=>{
        setCommentsLoading(true)
        getCommentsByArticleId(articleId)
        .then((response)=>{
            setComments(response.comments)
            setCommentsLoading(false)
        })
    }, [currentUser])



    function commentDeleteHandler(event, id){

        setCommentDeleteLoading(true)
        deleteComment(id)
        .then(()=>{
            
            let commentsCopy = structuredClone(comments)
            commentsCopy.forEach((comment)=>{
            if(comment.comment_id === id){
                comment.deleted = true

                }
            })
        setComments(commentsCopy)
        setCommentDeleteLoading(false)}      
        )
        .catch((err)=>{
            alert('Comment could not be deleted')
            setCommentDeleteLoading(false)
        })
    }



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
                    <li className={comment.deleted===undefined?'comment':'deleted-comment'} key={comment.comment_id}>
                    
                        
                        <h3 className='comment-header'>{comment.author}</h3>
                        <p >{comment.body}</p>
                        {currentUser!==null? 
                            <section className='comment-buttons'>
                                {comment.author===currentUser.username?
                                    <> 
                                        <p>{comment.votes}</p>   
                                        <button className='styled-button' disabled={comment.deleted!==undefined||commentDeleteLoading===true?true:false}onClick={(event)=>commentDeleteHandler(event, comment.comment_id)}>Delete My Comment</button>
                                        
                                    </>:
                                    <>
                                        <p>{comment.votes}</p>
                                        <button className='comment-button, styled-button'>Vote Up!</button>
                                        <button className='comment-button, styled-button'>Vote Down!</button>
                                    </>}

                                </section>    
                                    :<></>}
                           
                         
                    </li>
                )
            })}
        </ul>
        </>
    )
    
}

}

export default ArticleComments