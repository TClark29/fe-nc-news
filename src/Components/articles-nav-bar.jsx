import { useState, useEffect } from "react"
import { getTopics } from "../../api"
import { useNavigate, useSearchParams } from "react-router-dom"






function ArticlesNav(props){

const [topics, setTopics] = useState([])
const selectedTopic = props.selectedTopic
const setSelectedTopic = props.setSelectedTopic
const setSearchParams = props.setSearchParams
const setFilterButtonPressed = props.setFilterButtonPressed
const [sortBy, setSortBy] = useState(null)
const [order, setOrder] = useState(null)
const navigate = useNavigate()


useEffect(()=>{
    getTopics()
    .then((response)=>{
        setTopics(response.topics)

        
        
    })

}, [])



function handleTopicSelect(event){
    event.preventDefault()
    setSelectedTopic(event.target.value)
   
    navigate(`/${event.target.value}`)
   
    
}

function handleSortBy(event){
    event.preventDefault()
    setSortBy(event.target.value)
 
}
function handleOrder(event){
    event.preventDefault()
    setOrder(event.target.value)


}

function handleNavSubmit(e){
    e.preventDefault()
  
    const queryStr = `?sortBy=${sortBy}&&order=${order}`
    setSearchParams(queryStr)
    setFilterButtonPressed(true)
   

}



    return(
        <div id='nav-bar'>
            <div id='nav-topic'>
                <label>Select topic:  </label>
                <select onChange={(e)=>handleTopicSelect(e)} value={selectedTopic}>
                    <option key='0'>all</option>
                    {topics.map((topic, index)=>{
                     return (
                    <option key = {index+1} value={topic.slug} >{topic.slug}</option>
                        )
                    })}
                </select>
            </div>
            <p id='nav-info'>Current Topic: {selectedTopic[0].toUpperCase()+selectedTopic.slice(1)}</p>
           
            <form id='nav-sorter' onSubmit={(e)=>handleNavSubmit(e)}>
            <div id='sort-by-select'>
                              
                <label>Sorted By:</label>
                <select onChange={(e)=>handleSortBy(e)} defaultValue='default' >
                    <option value='default' disabled>Sort by..</option>
                    <option value='created_at'>date</option>
                    <option value='comment_count'>comment count</option>
                    <option value='votes'>votes</option>
                   
                </select>
            </div>
            <div id = 'order-select'>
            <label>Order:</label>
                <select onInput={(e)=>handleOrder(e)} defaultValue='default'>
                    <option value ='default' disabled>Order...</option>
                    <option value ='desc'>highest to lowest</option>
                    <option value ='asc'> lowest to highest</option>    
                </select>
           
            </div>
            <button disabled={sortBy===null||order===null?true:false}>Go!</button>
            </form>  
            
        </div>

    )


}

export default ArticlesNav