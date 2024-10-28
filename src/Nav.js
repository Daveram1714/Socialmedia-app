import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setSearch}) => {
  return (
<<<<<<< HEAD
    <nav className='Nav' >
      <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
      <label>Search Post</label>
      <input type = 'text'
      id = 'search'
      placeholder='Search post'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </form> 

      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="about">About</Link> </li>
        <li><Link to="post">Post</Link> </li>
      </ul>

=======
    <nav className='Nav'>
      <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor='Search'>Search Post</label>
      <input
      id='search'
      placeholder='Search Posts'
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </form>
      <ul>
        <li><Link to= '/'>Home</Link> </li>
        <li><Link to = '/post'>Post</Link> </li>
        <li><Link to = '/about'>About</Link> </li>
      </ul>


>>>>>>> main
    </nav>
)
}

export default Nav