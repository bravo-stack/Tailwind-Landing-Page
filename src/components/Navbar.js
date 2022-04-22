import React from 'react'
import Logo from './Logo'

function Navbar() {
    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
                <a href="#pablo" className="text sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                    <Logo />
                </a>
            </nav>
        </div>
    )
}

export default Navbar