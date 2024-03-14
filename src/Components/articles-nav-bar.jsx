import { useState, useEffect } from "react"
import { getTopics } from "../../api"




function ArticlesNav(props){

const [topics, setTopics] = useState([])
const setSelectedTopic = props.setSelectedTopic
const setSearchParams = props.setSearchParams

useEffect(()=>{
    getTopics()
    .then((response)=>{
        setTopics(response.topics)

        
        
    })

}, [])

function handleTopicSelect(event){
    setSelectedTopic(event.target.value)
    setSearchParams(`?topic=${event.target.value}`)
}


    return(
        <nav>
        <h1>Nav Bar</h1>
        <select onChange={(e)=>handleTopicSelect(e)}>
            <option key='0'>all</option>
            {topics.map((topic, index)=>{
                return (
                    <option key = {index+1} value={topic.slug} >{topic.slug}</option>
                )
            })}
        </select>
        </nav>
    )


}

export default ArticlesNav