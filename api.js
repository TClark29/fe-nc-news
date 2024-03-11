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

export {getArticles}