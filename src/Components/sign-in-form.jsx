import { useContext } from "react"
import UserContext from "../Contexts/user-context"



function SignInForm(){
    
    const userTemp = {
        "username": "jessjelly",
        "name": "Jess Jelly",
        "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
        }

    const { setCurrentUser } = useContext(UserContext)

    return (
        <button className='styled-button'onClick = {()=>setCurrentUser(userTemp)}>Sign In</button>
    )


}

export default SignInForm