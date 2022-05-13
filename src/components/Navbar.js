import Logo from './Logo'
import { UilApps } from '@iconscout/react-unicons'
import classes from "./navbar.module.css"
import { Link } from "react-router-dom"

function Navbar({navBarOpen, toggleNav}) {
    

    return (
        <>
            <nav className={`my-box-shadow relative flex flex-wrap items-center justify-between px-2 xl:px-8  lg:px-10 py-4 ${classes.blueish}`}>

                <div className="container px-4 m-auto flex flex-wrap items-center justify-between">

                    {/* Logo and button container */}
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start
                    md:flex-row-reverse mb-3' >
                        <Link to="/" className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white pt-auto">
                            <Logo />
                        </Link>
                        <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-transparent bg-transparent border-solid rounded block lg:hidden outline-none focus:outline-none" type='button' onClick={() => toggleNav()}>
                            <UilApps />
                        </button>
                    </div>


                    {/* responsive dropdown */}
                    <div className={` lg:flex flex-grow items-center ${navBarOpen ?"flex":"hidden "}   `} id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row pt-auto list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link to="/about" className="px-3 py-2 flex items-center text-sm 
                                md:text-sm lg:text-md xl:text-md pr-6 pb-4 leading-snug text-white my-link">
                                    <span className="ml-2 uppercase">About</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="px-3 py-2 flex pr-6 pb-4 items-center text-sm 
                                md:text-sm lg:text-md xl:text-md leading-snug text-white my-link">
                                    <span className="ml-2 uppercase">Services</span>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="contact" className="px-3 py-2 pr-4 flex items-center text-sm 
                                md:text-sm lg:text-md xl:text-md leading-snug text-white my-link">
                                    <span className="ml-2 uppercase">Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar