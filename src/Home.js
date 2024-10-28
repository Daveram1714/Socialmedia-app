import React from 'react'
import Feed from './Feed'

const Home = ({posts}) => {
  return (
<<<<<<< HEAD
    <main className='Home'>
        {posts.length ?(
        <Feed posts={posts} />) :
        (<p style={{marginTop :"2rem"}}>
          No post is prested 
        </p>)
        }
=======
    <main>
        <h1>Home page</h1>
>>>>>>> main
    </main>
)
}

export default Home