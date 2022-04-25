import React, { useState } from 'react'
import Logo from './Logo'
import { UilApps, UilFacebook, UilTwitter, UilInstagram } from '@iconscout/react-unicons'
import classes from "./navbar.module.css"

function Navbar() {
    const [navBarOpen, setNavBarOpen] = useState(false)

    return (
        <>
            <nav className={`relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-800 ${classes.blueish}`}>

                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">

                    {/* Logo and button container */}
                    <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
                        <a href="#pablo" className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white pt-auto">
                            <Logo />
                        </a>
                        <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-transparent bg-transparent border-solid rounded block lg:hidden outline-none focus:outline-none" type='button' onClick={() => setNavBarOpen(!navBarOpen)}>
                            <UilApps />
                        </button>
                    </div>

                    <div className={"lg:flex flex-grow items-center" + (navBarOpen ?"flex":"hidden ")} id="example-navbar-danger">
                        <ul className="flex flex-col lg:flex-row pt-auto list-none lg:ml-auto">
                            <li className="nav-item">
                                <a href="#santos" className="px-3 py-2 flex items-center text-xs uppercase pr-6 pb-4 font-bold leading-snug text-white hover:opacity-75">
                                    <UilFacebook /><span className="ml-2">Share</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#santos" className="px-3 py-2 flex pr-6 pb-4 items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                                    <UilInstagram /><span className="ml-2">Post</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="#santos" className="px-3 py-2 pr-4 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
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