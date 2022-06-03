import React from 'react'
import { NavLink } from 'react-router-dom'
import FooterNote from './FooterNote'

function CompanyLinks() {
  return (
    <div className='flex flex-col gap-8'>
        <FooterNote text="Company" />
        <ul className='flex flex-col gap-3 text-sm text-gray-600 font-bold'>
            <li>
                <NavLink to="about">About us</NavLink>
            </li>
            <li>
                <NavLink to="contact">Contact us</NavLink>
            </li>
            <li>
                <NavLink to="coming">Careers</NavLink>
            </li>
            <li>
                <NavLink to="coming">Blog</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default CompanyLinks