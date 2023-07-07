import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={'container'}>
            <div className={'content'}>
                <Link to={'/'}>Home</Link>
                <Link to={'about'}>About</Link>
                <Link to={'contact'}>Contact</Link>
            </div>
        </div>
    )
}