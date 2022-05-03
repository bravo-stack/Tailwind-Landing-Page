import React from 'react'
import Navbar from './Navbar'

function Header({navBarOpen, toggleNav}) {
  return (
    <header className='header'>
        <Navbar navBarOpen={navBarOpen} toggleNav={toggleNav} />
    </header>
  )
}

export default Header