import { useState } from 'react'
import './App.css'
import ArticlesPage from './Components/articles-page'
import UserBar from './Components/user-bar'
import ArticleSingle from './Components/article-single'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
    <UserBar></UserBar>
      <Routes>
        <Route path='/' element={<ArticlesPage></ArticlesPage>}/>
        <Route path='/article/:id' element={<ArticleSingle></ArticleSingle>}/>
      </Routes>
    </>
  )
}

export default App
