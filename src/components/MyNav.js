import { NavLink } from "react-router-dom"

function MyNav({to, text, toggleNav, navBarState}) {


    // A function that sets the style for an active navigation link, indicating what page the user's currently on
    const activeLinkStyle = ({isActive}) => ({borderBottom: isActive? "2px solid #ffe418":""});

    // A function that toggles the navigation bar, when a user clicks on a navlink that is meant to navigate them to another page
    const closeNavBar = () => (navBarState===true?toggleNav():"");

    return (
        <div>
            <NavLink to={to} className= {` 
            navlink-hover
            flex 
            items-center text-sm
            md:text-sm lg:text-md xl:text-md  leading-snug
            lg:text-white
            my-text-primary
            `} 
            style={activeLinkStyle}>
                <span 
                className="uppercase" 
                onClick={() => closeNavBar()}>
                    {text}
                </span>
            </NavLink>
        </div>
    )
}

export default MyNav