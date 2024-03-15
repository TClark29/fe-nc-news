import { useNavigate } from "react-router-dom"



function ErrorPage(props){
    const error = props.error
    console.log(props, error, 'error page')
   
    

    const navigate = useNavigate()

    function errorClickNav(){
        
        navigate('/all')


    }


    return <>
    <section id ='error-page'>
    <h1 id='status-msg'>{error}</h1>
    <h2 id='error-page-msg'></h2>
    <button className='styled-button'onClick={(e)=>errorClickNav(e)}>Return to articles</button>
    </section>
    </>
}

export default ErrorPage