import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import posts from './api/Posts';

const EditPost = ({editTitle,editBody,setEditPostTitle,setEditPostBody,handelUpdate}) => {
  const {id} = useParams();
  const post  = posts.find((post) => (post.id).toString() === id)

  useEffect(() =>{
    if(post){
      console.log("post id is" ,post);
      console.log("post id i" ,id);
      setEditPostTitle(post.title)
      setEditPostBody(post.body)
    }
  },[(post),setEditPostTitle,setEditPostBody])
  return (
    <main className='NewPost'>
      {editTitle && 
      <>
        <h2>Edit Post</h2>
        <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
        <label>Title:</label>
        <input
        id='postTitle'
        type='text'
        required
        value={editTitle}
        onChange={(e) => setEditPostTitle(e.target.value)}   />  

        <label>Post :</label>
        <input
        id='postBody'
        type='textarea'
        required
        value={editBody}
        onChange={(e) => setEditPostBody(e.target.value)} />
        <button onSubmit={()=> handelUpdate(post.id)}> Submit</button>  
        </form>
      </>     
      }
      {!editTitle &&
                <>
                    <h2>Post Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to ="/" >Vist our home page for Solution </Link>
                    </p>
                </>
            }


    </main>
  )
}

export default EditPost