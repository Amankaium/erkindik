import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
import LinkA from '../Link/Link';


function Footer() {
    return (
        <footer>
            <br/>
            <div className='footer-fisrt-box'>
                <div className='footer-nav'>
                    <div className='footer-link'><LinkA href = "/">Учетная запись</LinkA></div>
                    <div className='footer-link'><LinkA href = "/">Художники</LinkA></div>
                    <div className='footer-link'><LinkA href = "/">Условия использования</LinkA></div>
                    <div className='footer-logo'><Logo/></div>
                    <div className='footer-link'><LinkA href = "/">Произведения искусства </LinkA></div>
                    <div className='footer-link'><LinkA href = "/">О нас</LinkA></div>
                    <div className='footer-link'><LinkA href = "/">Социальные сети</LinkA></div>
                </div>
                    <div className='footer-border'/>
            </div>
            <br/><br/><p>© Photo, Inc. 2019. We love our users!</p><br/><br/>
        </footer>
    )
}

export default Footer;
