import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <Link to="/aboutus">About us</Link>
            <Link to="/account">Account</Link>
            <Link to="socials">Socials</Link>
        </footer>
    )
}

export default Footer;
