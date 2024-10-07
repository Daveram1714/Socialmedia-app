import React, { useState } from 'react'
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
  )
}

export default App