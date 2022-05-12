import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import '../../App'
import LinkA from '../Link/Link';

function Header() {
  return (
    <header>
      <div className='header-logo'>
        <a><Logo/></a>
      </div>
      <div className='header-links'>
        <LinkA href="/" className='header-a'>Произведения искусства</LinkA>
        <LinkA href="/" className='header-a'>Художники</LinkA>
        <LinkA href="/" className='header-a'>Цены</LinkA>
        <LinkA href="/" className='header-a'>О нас</LinkA>
      </div>
      <div className='header-signup'>
      <span className='header-login'>
         <strong><LinkA href = "/">Вход</LinkA></strong></span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span className='header-register'><strong><LinkA href = "/">Регистрация</LinkA></strong></span>
      </div>
    </header>
  )
}

export default Header;
