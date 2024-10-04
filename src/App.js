import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route />
      </Routes>

      {/* <Header />
      <Nav />
      <Home />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer /> */}

    </div>
  )
}

export default App