import { useState, useContext } from "react";
import UserContext from "../Contexts/user-context";
import { postComment } from "../../api";


// const postData = { body: "example body", username: "butter_bridge" };


function CommentPostForm(props){

    const {currentUser} = useContext(UserContext)
    const articleId = props.articleId
    const setComments = props.setComments

    const [commentPostLoading, setCommentPostLoading] = useState(false)
    const [commentStatusMessage, setCommentStatusMessage] = useState('')
    const [commentBody, setCommentBody] = useState('')

    function handleCommentInput(event){
        event.preventDefault()
        setCommentBody(event.target.value)
    }
    
    function handleSubmit(event, user){
        setCommentStatusMessage('')
        setCommentPostLoading(true)
        event.preventDefault()
        const body = commentBody
        if(body.length < 10){
            setCommentStatusMessage('Comments must be at least 10 characters long')
            setCommentPostLoading(false)
        }
        else{
        postComment(articleId, user, body)
        
        .then((response)=>{
            const newComment = response.comment
            setComments((currComments)=>[newComment,...currComments])
            setCommentBody('')
            setCommentStatusMessage('Comment posted!')
            setCommentPostLoading(false)
            
            
        })
        .catch((err)=>{
            setCommentStatusMessage('Comment could not be posted')
        })
        }
    }

    if (currentUser===null){

        return (
        <p>Sign in to post comments and vote</p>)
       
    }
    else{
        return(<>
            <label htmlFor='comment-form'hidden>Comment post form</label>
            <form id='comment-form' disabled={commentPostLoading} onSubmit={(e)=>handleSubmit(e, currentUser.username)}>
                <h2 id='comment-header'>Comments</h2>
                <p id='comment-text'>{`Commenting as ${currentUser.username}:`}</p>
                <label htmlFor='comment-input' hidden>Comment input text box</label>
                <textarea id= 'comment-input' disabled={commentPostLoading} value={commentBody} type="text" onChange={(e)=>handleCommentInput(e)}></textarea>
                <label htmlFor="comment-button" hidden>Comment submit button</label>
                <button id= 'comment-button' className='styled-button'disabled={commentPostLoading}> Submit Comment</button>
                <p id='comment-message'>{commentStatusMessage}</p>
            </form>
            </>
        )
    }




}

export default CommentPostForm