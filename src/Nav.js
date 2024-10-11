import React from 'react'

const Nav = ({search,setSearch}) => {
  return (
    <nav className='Nav' >
      <form onSubmit={(e)=> e.preventDefault()}>
      <label>Search Post</label>
      <input type = 'text'
      id = 'search'
      placeholder='Search post'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </form>        
    </nav>
)
}

export default Nav