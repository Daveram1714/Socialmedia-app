import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'

const Post = ({post}) => {
=======
>>>>>>> main

const Post = ({post}) => {   
  return (
<<<<<<< HEAD
    <article className='post'>
   <Link to = {`post/${post.id}`} ><h2>{post.title}</h2>
    <p className='postDate'>{post.datetime}</p>
        </Link>
    <p className='postBody'>{
    (post.body).length <= 25 
    ?(post.body) 
    : `${(post.body).slice(0,25)}...`
      }</p>
   </article>
=======
    <article>
      <h2>{post.title}</h2>
      <p className='postDate'>{post.datetime}</p>
      <p className='postBody'>{post.body ? (post.body).length <= 25 ? post.body : `${(post.body).slice(0,25)}...` : ''}</p>
    </article>
>>>>>>> main
  )
}

export default Post