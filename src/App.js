import React, { useEffect, useState } from 'react'
import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { format } from 'date-fns'
import { Route, useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import api from "./api/Posts.js"

const App = () => {
  const[posts,setPosts] = useState([])        

const[search,setSearch] =useState('')
const[searchResults,setSearchResults] = useState([])
const[postTitle,setPostTitle] = useState()
const[postBody,setPostBody] = useState()
const navigate = useNavigate();


useEffect(() =>{
  const fetchPosts = async() =>{
    try {
      const responce = await api.get("/posts");
      setPosts(responce.data);
    } catch (error) {
      if(error.responce){
        console.log(error.responce.data);
        console.log(error.responce.status);
        console.log(error.responce.Header);       
      }
      else{
        console.log(`Error :${error.responce}`);        
      }
      
    }
  }
  fetchPosts();
} ,[])

useEffect(() => {
  const filterResults = posts.filter((post) => 
    (post.body.toLowerCase()).includes(search.toLowerCase()) || 
    (post.title.toLowerCase()).includes(search.toLowerCase())
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