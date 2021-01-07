import './style.css';
import {ReactComponent as Logo} from './Logo.svg';

function Navbar(){
    return (
        <nav className = "main-navbar">
            <Logo></Logo>
            <a href="Home" className="logo-text">FS Delivery</a>
        </nav>
    )
}

export default Navbar;