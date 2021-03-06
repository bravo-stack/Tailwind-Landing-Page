import Logo from './Logo'
import { UilApps, UilMultiply } from '@iconscout/react-unicons'
import { Link } from "react-router-dom"
import HorizontalLine from '../components/HorizontalLine'
import MyNav from './MyNav';

function Navbar({navBarOpen, toggleNav}) {

    // A function that toggles the navigation bar, when a user clicks on a navlink that is meant to navigate them to another page
    const closeNavBar = () => (navBarOpen===true?toggleNav():"");


    return (
        <>
            <nav className={`my-box-shadow relative flex flex-wrap items-center justify-between  my-bg-blue`}>

                <div className="lg:px-16 xl:px-20 lg:py-6 w-full flex flex-wrap items-center justify-between">

                    {/* Logo and button container */}
                    <div className='px-9 md:px-16 lg:px-0 py-7 lg:py-0 w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start
                    md:flex-row-reverse' >
                        <Link to="/" className="text-xl md:text-2xl lg:text-3xl font-bold  inline-block  whitespace-nowrap text-white">
                            <span onClick={() => closeNavBar()}>
                                <Logo />
                            </span>
                        </Link>
                        <button className="text-white cursor-pointer text-xl leading-none border border-transparent bg-transparent border-solid rounded block lg:hidden outline-none focus:outline-none" type='button' onClick={() => toggleNav()}>
                            {navBarOpen?<UilMultiply />:<UilApps />}
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
                                <MyNav 
                                to="/about" 
                                text="About" 
                                closeNavBar={closeNavBar} />
                            </li>
                            <HorizontalLine />
                            <li className="nav-item
                            m-auto">
                                <MyNav 
                                to="/services" 
                                text="Services" 
                                closeNavBar={closeNavBar} />
                            </li>
                            <HorizontalLine />
                            <li className="nav-item 
                            m-auto">
                                <MyNav 
                                to="/contact" 
                                text="Contact Us" 
                                closeNavBar={closeNavBar} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar