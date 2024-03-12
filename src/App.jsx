import { useState } from 'react'
import './App.css'
import ArticlesPage from './Components/articles-page'
import UserBar from './Components/user-bar'
import ArticleSingle from './Components/article-single'
import { Route, Routes } from 'react-router-dom'
import UserContext from './Contexts/user-context'

function App() {
  
  const [currentUser, setCurrentUser] = useState(
    {
      "username": "jessjelly",
      "name": "Jess Jelly",
      "avatar_url": "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141"
      }
  )

  return (
    <>
    <UserContext.Provider value={{currentUser:currentUser, setCurrentUser:setCurrentUser}}>
      <UserBar></UserBar>
      <Routes>
        <Route path='/' element={<ArticlesPage></ArticlesPage>}/>
        <Route path='/article/:id' element={<ArticleSingle></ArticleSingle>}/>
      </Routes>
    </UserContext.Provider>  
    </>
  )
}

export default App
