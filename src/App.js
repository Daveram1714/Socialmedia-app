<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
=======
import React, { useState } from 'react'
>>>>>>> main
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
<<<<<<< HEAD
import { format } from 'date-fns'
import { Route, useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'

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
const navigate = useNavigate();

useEffect(() => {
  const filterResults = posts.filter((post) => 
    (post.body.toLowerCase()).includes(search.toLowerCase()) || 
    (post.title.toLowerCase()).includes(search.toLowerCase())
=======
import { Link, Route, Routes } from 'react-router-dom'
import Post from './Post'
import PostLayout from './PostLayout'

const App = () => {

  const[post,setPost] = useState([
    {
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      datetime :   "December 31, 2024 6:00 PM",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      id: 2,
      datetime :   "November 18, 2020 11:30 AM",
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      id: 3,
      datetime :   "October 1, 2022 7:15 PM",
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      id: 4,
      title: "eum et est occaecati",
      datetime :   "August 15, 2010 2:45 PM",

      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      id: 5,
      title: "nesciunt quas odio",
      datetime :   "September 9, 2015 10:00 AM",
      body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      id: 6,
      title: "dolorem eum magni eos aperiam quia",
      datetime :  "July 22, 2003 5:30 AM",
      body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }
  ])
const[search,setSearch] = useState('')
const[searchResult,setSearchResult] =useState ([])  
  
  return (
    <div className='App'>
        
      <Header 
      title = "Welcome to my Web-site"
      />
      <Nav 
      search = {search}
      setSearch = {setSearch}
      
      />
      <Home />
      <NewPost />
      <PostPage />
      <Post 
      post ={post}
      />
      <About />
      <Missing />
      <Footer />


      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/post' element ={<Post/>} />
        <Route path='/about' element ={<About />} />

      </Routes>

    </div>
>>>>>>> main
  )
  setSearchResults(filterResults.reverse())
}, [posts, search])



const handelSubmit = (e) => {
  e.preventDefault()
  const id = posts.length ? posts[posts.length -1 ].id +1 : 1 ;
  const datetime = format(new Date() , "MMMM dd, yyyy pp")

  const newpost = {
    id ,
    title : postTitle,
    datetime,
    body : postBody
  } ;
  const allpost = [...posts,newpost];
  setPosts(allpost)
  setPostTitle('')
  setPostBody('')
  navigate('/')
}




const handelDelete =(id)=>{
  const postList = posts.filter(post =>post.id  !== id)
  setPosts(postList)
  navigate('/')
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

        <Routes>   
          <Route path = "/" element = { 
            <Home 
            posts= {searchResults}
          />} />

           <Route path='post' >  
           <Route index element={  <NewPost 
            postTitle = {postTitle}
            postBody = {postBody}
            setPostTitle ={setPostTitle}
            setPostBody = {setPostBody}
            handelSubmit={handelSubmit}
          
            />} />
            <Route path=':id' element={<PostPage posts ={posts} handelDelete = {handelDelete} />} />
            </Route>
            <Route path = 'about' element = {<About />} />
            <Route path = "*" element = {<Missing />} />

        </Routes>
        <Footer />
  </div>
)
}
export default App