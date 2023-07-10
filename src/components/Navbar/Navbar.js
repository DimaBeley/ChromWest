import { NavLink } from "react-router-dom";
const NavItem = ({text, link}) => {
    return (
        <NavLink to={link} style={({isActive}) => {
            return {color: isActive ? 'green' : ''}}} >{text}</NavLink>
    )
}
export const Navbar = () => {
    return (
        <div className={'container'}>
            <nav className={'content'}>
                <NavItem text={'Home'} link={'/'}/>
                <NavItem text={'About'} link={'/about'} />
                <NavItem text={'Contact'} link={'/contact'} />

                {/*<NavLink to={'contact'} style={({isActive}) => { return {*/}
                {/*                        color: isActive ? 'red' : ''*/}
                {/*                    }}} >Contact</NavLink>*/}
            </nav>
        </div>
    )
}