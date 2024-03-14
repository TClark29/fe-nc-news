import { useState, useEffect } from "react"
import { getTopics } from "../../api"




function ArticlesNav(props){

const [topics, setTopics] = useState([])
const selectedTopic = props.selectedTopic
const setSelectedTopic = props.setSelectedTopic
const setSearchParams = props.setSearchParams

useEffect(()=>{
    getTopics()
    .then((response)=>{
        setTopics(response.topics)

        
        
    })

}, [])

function handleTopicSelect(event){
    event.preventDefault()
    setSelectedTopic(event.target.value)
    setSearchParams(`?topic=${event.target.value}`)
}


    return(
        <div id='nav-bar'>
        <div id='topic-select'>
            <label>Topic:</label>
            <select onChange={(e)=>handleTopicSelect(e)} value={selectedTopic}>
            <option key='0'>all</option>
            {topics.map((topic, index)=>{
                return (
                    <option key = {index+1} value={topic.slug} >{topic.slug}</option>
                )
            })}
            </select>
        </div>
        </div>
    )


}

export default ArticlesNav