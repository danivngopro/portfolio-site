import './Navbar.css';
import CustomLink from './CustomLink';
import { Link } from 'react-router-dom';
// import { auth } from '../firebase/base';

function Navbar() {
    return (
        <nav className='nav'>
            <Link to='/' className='site-title'>Home</Link>
            <ul>
                <CustomLink to='/cv'>My CV</CustomLink>
                <CustomLink to='/projects'>My Projects</CustomLink>
            </ul>
        </nav>
    );
}

export default Navbar;