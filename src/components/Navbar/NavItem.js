import { NavLink } from "react-router-dom";

export const NavItem = ({text, link}) => {
    return (
        <NavLink to={link} style={({isActive}) => {
            return { color: isActive ? 'green' : '' }}} >{text}</NavLink>
    )
}