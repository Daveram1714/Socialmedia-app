import React, { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'

const App = () => {
  const[search,setSearch] =useState('')



  return(
  <div className='App'>

     <Header 
     title="Social Media app"
     />
        <Nav 
        search = {search}
        setSearch = {setSearch} 
        />
        <Home />
        <NewPost />
        <PostPage />
        <About />
        <Missing />
        <Footer /> 

  </div>
)
}
export default App