import React from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
import LinkA from '../Link/Link';


function Footer() {
    const footerStyle = {
        imgStyle: {
            height: "100px"
        }
    }

    return (<footer>
            <div className='footer-nav'>
                <LinkA href = "/" className='footer-link'>О нас</LinkA>
                <LinkA href = "/" className='footer-link'>Художники</LinkA>
                <LinkA href = "/" className='footer-link'>Условия использования</LinkA>
                <img style={footerStyle.imgStyle} src='https://www.pngkit.com/png/full/109-1096643_ar-hifi-logo-voxx-accessories-acoustic-research-data.png'/>
                <LinkA href = "/" className='footer-link'>Произведения искусства </LinkA>
                <LinkA href = "/" className='footer-link'>Учетная запись</LinkA>
                <LinkA href = "/" className='footer-link'>Социальные сети</LinkA>
             </div>
            <br/><br/>
            <div className='footer-border'/>
             <br/><br/><br/>
                <p className='footer-p'>© Photo, Inc. 2019. We love our users!</p>
                <Logo/>
        </footer>
    )
}

export default Footer;
