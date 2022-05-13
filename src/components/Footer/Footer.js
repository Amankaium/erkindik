import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <Link to="/aboutus">About us</Link>
            <Link to="/account">Account</Link>
            <Link to="/socials">Socials</Link>
            <Link to="/terms-and-condition">Terms and Condition</Link>
        </footer>
    )
}

export default Footer;
