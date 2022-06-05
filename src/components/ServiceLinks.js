import { NavLink } from "react-router-dom"
import FooterNote from "./FooterNote"

function ServiceLinks() {
  return (
    <div className='xl:flex flex-col gap-8 hidden'>
        <FooterNote text="services" />
        <ul className='flex flex-col gap-5 text-sm text-gray-600 font-bold'>
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

export default ServiceLinks