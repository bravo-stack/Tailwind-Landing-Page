import Navbar from './Navbar'

function Header({navBarOpen, toggleNav}) {
  return (
    <header className='header sticky  top-0 left-0 z-10 my-bg-blue' style={{
      width: "100%"
    }}>
      <Navbar navBarOpen={navBarOpen} toggleNav={toggleNav} />
    </header>
  )
}

export default Header