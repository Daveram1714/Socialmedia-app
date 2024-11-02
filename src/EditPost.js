import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const EditPost = ({editTitle,editBody,setEditPostTitle,setEditPostBody,handelUpdate,posts}) => {
  const {id} = useParams();
  const post  = posts.find((post) => (post.id).toString() === id)

  useEffect(() =>{
    if(post){
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
        <textarea
        id='postBody'
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


// import { useEffect } from 'react';
// import { useParams,  Link} from 'react-router-dom';
// import post from './api/Posts';

// const EditPost = ({ posts, editTitle, editBody, setEditPostTitle, setEditPostBody, handelUpdate }) => {
//   const { id } = useParams();


//   useEffect(() => {
//     const post = posts.find((post) => post.id.toString() === id);

//     if (post) {
//       setEditPostTitle(post.title);
//       setEditPostBody(post.body);
//     }       
    
//   }, [id, posts, setEditPostTitle, setEditPostBody]);


//   return (
//         <main className='NewPost'>
//           {editTitle && 
//           <>
//             <h2>Edit Post</h2>
//             <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
//             <label>Title:</label>
//             <input
//             id='postTitle'
//             type='text'
//             required
//             value={editTitle}
//             onChange={(e) => setEditPostTitle(e.target.value)}   />  
    
//             <label>Post :</label>
//             <input
//             id='postBody'
//             type='textarea'
//             required
//             value={editBody}
//             onChange={(e) => setEditPostBody(e.target.value)} />
//             <button onSubmit={()=> handelUpdate(post.id)}> Submit</button>  
//             </form>
//           </>     
//           }
//           {!editTitle &&
//                     <>
//                         <h2>Post Not Found</h2>
//                         <p>Well, that's disappointing.</p>
//                         <p>
//                             <Link to ="/" >Vist our home page for Solution </Link>
//                         </p>
//                     </>
//                 }
    
    
//         </main>
//       )
//     }
    
//     export default EditPost
    