import Logo from './Logo'
import { UilApps } from '@iconscout/react-unicons'
import classes from "./navbar.module.css"
import { Link } from "react-router-dom"
import HorizontalLine from '../HorizontalLine'

function Navbar({navBarOpen, toggleNav}) {

    return (
        <>
            <nav className={`my-box-shadow lg:shadow-none relative flex flex-wrap items-center justify-between  ${classes.blueish}`}>

                <div className="lg:px-12 lg:py-6 w-full flex flex-wrap items-center justify-between">

                    {/* Logo and button container */}
                    <div className='px-8 lg:px-0 py-7 lg:py-0 w-screen relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start
                    md:flex-row-reverse' >
                        <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-bold  inline-block  whitespace-nowrap text-white ">
                            <Logo />
                        </Link>
                        <button className="text-white cursor-pointer text-xl leading-none border border-transparent bg-transparent border-solid rounded block lg:hidden outline-none focus:outline-none" type='button' onClick={() => toggleNav()}>
                            <UilApps />
                        </button>
                    </div>


                    {/* responsive dropdown */}
                    <div className={`
                    lg:flex 
                    flex-grow 
                    bg-white 
                    py-5 lg:py-0
                    lg:bg-opacity-0 justify-center lg:justify-end ${navBarOpen ?"flex":"hidden "}`}>
                        <ul className="
                        flex flex-col lg:flex-row
                        gap-5
                        lg:gap-8
                        list-none lg:ml-auto
                        w-full lg:w-auto">
                            <li className="nav-item 
                            m-auto ">
                                <Link to="/about" className=" flex 
                                items-center text-sm
                                md:text-sm lg:text-md xl:text-md  leading-snug
                                lg:text-white
                                my-text-primary
                                 my-link">
                                    <span className="uppercase">About</span>
                                </Link>
                            </li>
                            <HorizontalLine />
                            <li className="nav-item
                            m-auto">
                                <Link to="/services" className=" flex  items-center text-sm 
                                md:text-sm lg:text-md 
                                lg:text-white
                                xl:text-md leading-snug my-text-primary my-link">
                                    <span className="uppercase">Services</span>
                                </Link>
                            </li>
                            <HorizontalLine />
                            <li className="nav-item 
                            m-auto">
                                <Link to="contact" className=" flex items-center text-sm 
                                md:text-sm lg:text-md xl:text-md 
                                lg:text-white
                                leading-snug my-text-primary my-link">
                                    <span className="uppercase ">Contact Us</span>
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