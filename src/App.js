import React, { useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import {format} from 'date-format'


const App = () => {
  const[posts,setPosts] = useState([
    {
      id : 1,
      title : "My first post",
      datetime : "July 01,2021 11: 17 : 36 AM",
      body : "Make a wish"
    },
  {
    id: 2,
    title: "My second Post",
    datetime: "July 02, 2021 12:00:00 AM",
    body: "This is my second post"
  },
  {
    id: 3,
    title: "My third Post",
    datetime: "July 03, 2021 01:00:00 AM",
    body: "This is my third post"
  },
  {
    id: 4,
    title: "My fourth Post",
    datetime: "July 04, 2021 02:00:00 AM",
    body: "This is my fourth post"
  },
  {
    id: 5,
    title: "My fifth Post",
    datetime: "July 05, 2021 03:00:00 AM",
    body: "This is my fifth post"
  }
])        

const[search,setSearch] =useState('')
const[searchResults,setSearchResults] = useState([])
const[postTitle,setPostTitle] = useState()
const[postBody,setPostBody] = useState()
const handelSubmit = (e) => {
  e.preventDefault()
  const id = posts.length ? posts[posts.length -1 ].id +1 : 1 ;
  const datetime = format(new Date() , "MMMM dd, YYYY pp")
  const newpost = {
    id : id,
    title : postTitle,
    datetime :datetime,
    body : postBody
  } 
  const allpost = [...posts,newpost];
  setPosts(allpost)
  setPostTitle('')
  setPostBody('')
  navigator('/')
}


return(
  <div className='App'>

     <Header 
     title="Social Media app"
     />
        <Nav 
          search = {search}
          setSearch = {setSearch} 
        />
        <Home 
        posts= {posts}
       />
        <NewPost 
        postTitle = {postTitle}
        postBody = {postBody}
        setPostTitle ={setPostTitle}
        setPostBody = {setPostBody}
        handelSubmit={ handelSubmit}
        />
        <PostPage />
        <About />
        <Missing />
        <Footer /> 

  </div>
)
}
export default App