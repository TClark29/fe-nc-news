import { useNavigate } from "react-router-dom"

useNavigate

function ErrorPage(){

    const navigate = useNavigate()

    function errorClickNav(){
        console.log(1)
        navigate('/all')


    }


    return <>
    <section id ='error-page'>
    <h1 id='status-msg'>404</h1>
    <h2 id='error-page-msg'>This page doesn't seem to exist</h2>
    <button className='styled-button'onClick={(e)=>errorClickNav(e)}>Return to articles</button>
    </section>
    </>
}

export default ErrorPage