import React from 'react'

const NewPost = ({postTitle,postBody,setPostTitle,setPostBody,handelSubmit}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm'  onSubmit={handelSubmit}> 
        <label>Post Title</label>
        <input
          id = "postTitle" 
          type = 'text'
          required
          placeholder = "Post Title"
          value = {postTitle}
          onchange = {(e) => setPostTitle(e.target.value)}
          />

          <label>Post :</label>
          <textarea
            id='postBody'
            type='text'
            value = {postBody}
            onchange = {(e) => setPostBody(e.target.value)}
            />

            <button type='submit'> submit</button>
      </form>
        
    </main>
)
}

export default NewPost