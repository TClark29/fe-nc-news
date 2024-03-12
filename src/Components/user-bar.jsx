import { useContext } from "react"
import UserContext from "../Contexts/user-context"
import logo from '../assets/logo.png'
import UserInfo from "./user-info"
import SignInForm from "./sign-in-form"


function UserBar(){

    const { currentUser, setCurrentUser } = useContext(UserContext)

    console.log(currentUser)

    return (
        <section id='user-bar'>
        <img id='main-logo'src={logo} alt="NC-news main logo" />
        <div>
            {currentUser!==null?<UserInfo></UserInfo>:
            <SignInForm></SignInForm>}

        </div>
        </section>
    )
}


export default UserBar