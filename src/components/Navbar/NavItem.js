import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const NavItem = ({ text, link, className, style }) => {
  return (
      <NavLink to={link}
               className={`${styles.navigationLink} ${className}`}
               style={style}
      >
        {text}
      </NavLink>
  )
}
