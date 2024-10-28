import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts,handelDelete}) => {
  const { id } = useParams();
  const post = posts.find(post => (post.id).toString() === id)

  return (
<<<<<<< HEAD
    <main className='PostPage'>
      <article className='post'>
          {post &&
            <>
              <h2>{post.title}</h2>
              <p className='postDate'>{post.datetime}</p>
              <p className='postBody'>{post.body}</p>
              <button className="deleteButton" onClick ={() =>handelDelete(post.id)}>Delete post</button>
            </>
          }
          {!post &&
          <>
            <h2>Post Not FOund</h2>
            <p>Well things Disapponting</p>
            <p> <Link to='/' >Visite our Homepae</Link> </p>
          </>


          }

      </article>
      
=======
    <main>
        <h1>Post Page</h1>
        
>>>>>>> main
    </main>
)
}

export default PostPage


