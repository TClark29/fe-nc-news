import axios from "axios";


function getArticles(){

    return axios.get('https://nc-news-6wmp.onrender.com/api/articles')
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

function getArticleById(id){
    return axios.get(`https://nc-news-6wmp.onrender.com/api/articles/${id}`)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>
    console.log(err))
}

function getCommentsByArticleId(id){
    return axios.get(`https://nc-news-6wmp.onrender.com/api/articles/${id}/comments`)
    .then((response) =>{
        return response.data
    })
    .catch((err)=>{
        console.log(err)
    })
}

function getUsers(){
    return axios.get('https://nc-news-6wmp.onrender.com/api/users')
    .then((response)=>{
        return response.data
    })
    .catch()
}

function updateArticleVotes(id, votes){
    const sentBody = {'inc_votes':votes}
    return axios.patch(`https://nc-news-6wmp.onrender.com/api/articles/${id}`, sentBody)
    .then((response)=>{
        return response.data
    })
    .catch()
}

function postComment(articleId, user, body){
    const sentBody = { body: body, username: user }
    return axios.post(`https://nc-news-6wmp.onrender.com/api/articles/${articleId}/comments`, sentBody)
    .then((response)=>{
        return response.data})
    .catch()

}

function deleteComment(commentId){
    return axios.delete(`https://nc-news-6wmp.onrender.com/api/comments/${commentId}`)
    .then((response)=>{ 
        return response}
   )
   .catch()
}

function getTopics(){
    return axios.get(`https://nc-news-6wmp.onrender.com/api/topics`)
    .then((response)=>{ 
        return response.data}
   )
   .catch()
}

export {getArticles, getArticleById, getCommentsByArticleId, getUsers, updateArticleVotes, postComment, deleteComment, getTopics}