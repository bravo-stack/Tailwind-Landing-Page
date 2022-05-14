import React from 'react'
import Navbar from './Navbar'

function Header({navBarOpen, toggleNav}) {
  return (
    <header className='header sticky  top-0 left-0 border-b border-white' style={{
      width: "100vw"
    }}>
        <Navbar navBarOpen={navBarOpen} toggleNav={toggleNav} />
    </header>
  )
}

export default Header