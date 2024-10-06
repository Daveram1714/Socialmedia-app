import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { Link, Route, Routes } from 'react-router-dom'
import Post from './Post'

const App = () => {
  return (
    <div className='App'>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/about'>about</Link> </li>
            <li><Link to='/newpost'>new post</Link></li>
            <li><Link to= '/postpage'>post page</Link> </li>

          </ul>

        </nav>


      <Routes>
        <Route path='*' element ={<Missing />} />
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      <Route path='/postpage'> 
        <Route index element={<PostPage/>}/>
        <Route path=':id' element = {<Post />} />
      </Route>
        <Route path='/newpost' element={<NewPost/>}/>
      
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