import Logo from './Logo'
import { UilApps, UilFacebook, UilTwitter, UilInstagram } from '@iconscout/react-unicons'
import classes from "./navbar.module.css"

function Navbar({navBarOpen, toggleNav}) {
    

    return (
        <>
            <nav className={`relative flex flex-wrap items-center justify-between px-2 py-4 ${classes.blueish}`}>

                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    {/* Logo and button container */}
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start
                    md:flex-row-reverse mb-3' >
                        <a href="#pablo" className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white pt-auto">
                            <Logo />
                        </a>
                        <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-transparent bg-transparent border-solid rounded block lg:hidden outline-none focus:outline-none" type='button' onClick={() => toggleNav()}>
                            <UilApps />
                        </button>
                    </div>


                    {/* responsive dropdown */}
                    <div className={` lg:flex flex-grow items-center ${navBarOpen ?"flex":"hidden "}   `} id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row pt-auto list-none lg:ml-auto">
                            <li className="nav-item">
                                <a href="#santos" className="px-3 py-2 flex items-center text-s lg:text-lg xl:text-xl pr-6 pb-4 leading-snug text-white hover:opacity-45">
                                    <UilFacebook /><span className="ml-2">Share</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#santos" className="px-3 py-2 flex pr-6 pb-4 items-center text-s lg:text-lg xl:text-xl leading-snug text-white hover:opacity-45">
                                    <UilInstagram /><span className="ml-2">Post</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="#santos" className="px-3 py-2 pr-4 flex items-center text-s lg:text-lg xl:text-xl leading-snug text-white hover:opacity-45">
                                    <UilTwitter /><span className="ml-2">Tweet</span>
                                </a>
                            </li>
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar