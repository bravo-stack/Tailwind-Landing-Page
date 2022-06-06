import { NavLink } from "react-router-dom"
import FooterNote from "./FooterNote"

function ServiceLinks() {
  return (
    <div className='xl:flex flex-col gap-8 hidden'>
        <FooterNote text="services" />
        <ul className='flex flex-col gap-5 text-sm text-gray-600 font-bold'>
            <li>
                <NavLink to="coming">Digital Marketing</NavLink>
            </li>
            <li>
                <NavLink to="coming">Content Writing</NavLink>
            </li>
            <li>
                <NavLink to="coming">SEO for Business</NavLink>
            </li>
            <li>
                <NavLink to="coming">Product Design</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default ServiceLinks