import { useContext } from "react"
import UserContext from "../Contexts/user-context"

useContext

function UserInfo(){

    const { currentUser, setCurrentUser } = useContext(UserContext)

    return (
        <section id='user-info'>   
            <img id='user-avatar' src={currentUser.avatar_url} alt="Current user avatar" />
            <p>{`Signed in as user ${currentUser.username}`}</p>
            <p>{`Welcome, ${currentUser.name.split(' ')[0]}`}</p>
            <button onClick={()=>setCurrentUser(null)}>Sign Out</button>
        </section>
    )


}

export default UserInfo