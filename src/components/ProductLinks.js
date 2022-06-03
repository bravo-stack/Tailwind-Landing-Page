import FooterNote from "./FooterNote"
import { NavLink } from "react-router-dom"

function ProductLinks() {
  return (
    <div className='flex flex-col gap-8'>
        <FooterNote text="Products" />
        <ul className='flex flex-col gap-3 text-sm text-gray-600 font-bold'>
            <li>
                <NavLink to="coming">Features</NavLink>
            </li>
            <li>
                <NavLink to="services">Pricing us</NavLink>
            </li>
            <li>
                <NavLink to="coming">News</NavLink>
            </li>
            <li>
                <NavLink to="coming">Support</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default ProductLinks