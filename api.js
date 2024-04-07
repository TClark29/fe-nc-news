import axios from "axios";


function getArticles(topic='all', sortBy, order){

    let queryStr='?'

    if (topic!=='all'&&topic!==undefined){
        queryStr+=`topic=${topic}`
    }
    
    if (sortBy!==null&&order!==null&&sortBy!==undefined&&order!==undefined){
        if(topic!=='all'){
            queryStr+='&'
        }

        queryStr+=`sort_by=${sortBy}&order=${order}`
    }
   

    return axios.get(`https://nc-news-6wmp.onrender.com/api/articles${queryStr}`)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
       
        return err
    })
}

function getArticleById(id){
    return axios.get(`https://nc-news-6wmp.onrender.com/api/articles/${id}`)
    .then((response)=>{
        return response.data
        
    })
    .catch((err)=>{
        return Promise.reject(err)
    
        
})
}

function getCommentsByArticleId(id){
    return axios.get(`https://nc-news-6wmp.onrender.com/api/articles/${id}/comments`)
    .then((response) =>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

function getUsers(){
    return axios.get('https://nc-news-6wmp.onrender.com/api/users')
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

function updateArticleVotes(id, votes){
    const sentBody = {'inc_votes':votes}
    return axios.patch(`https://nc-news-6wmp.onrender.com/api/articles/${id}`, sentBody)
    .then((response)=>{
        return response.data
    })
    .catch((err)=>{
        return err
    })
}

function postComment(articleId, user, body){
    const sentBody = { body: body, username: user }
    return axios.post(`https://nc-news-6wmp.onrender.com/api/articles/${articleId}/comments`, sentBody)
    .then((response)=>{
        return response.data})
    .catch((err)=>{
        return err
    })

}

function deleteComment(commentId){
    return axios.delete(`https://nc-news-6wmp.onrender.com/api/comments/${commentId}`)
    .then((response)=>{ 
        return response}
   )
   .catch((err=>{
    return err
   }))
}

function getTopics(){
    
        

    return axios.get(`https://nc-news-6wmp.onrender.com/api/topics`)
    .then((response)=>{ 
        return response.data}
   )
   .catch((err)=>{
    return err
   })
   }

function patchComment(comment_id, votes){
    console.log(comment_id, votes)
    const sentBody = {inc_votes: votes}
    console.log(sentBody)
    return axios.patch(`https://nc-news-6wmp.onrender.com/api/comments/${comment_id}`, sentBody)
    .then((response)=>{
        console.log(response)
        return response.data
    })
    .catch((err)=>{
        return err
    })


}

   


export {getArticles, getArticleById, getCommentsByArticleId, getUsers, updateArticleVotes, postComment, deleteComment, getTopics, patchComment}