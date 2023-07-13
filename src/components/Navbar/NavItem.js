import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'
export const NavItem = ({text, link}) => {
    return (
        <NavLink to={link}
                 className={styles.link}
                 style={({isActive}) => { return {backgroundColor: isActive ? 'red': 'yellow'}}}
        >
            {text}
        </NavLink>
    )
}
