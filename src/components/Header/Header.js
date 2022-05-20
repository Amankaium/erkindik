import React from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import '../../App'
import LinkA from '../Link/Link';

function Header() {
  return (
    <header>
      <div className='header-logo'>
        <a href='/'><Logo/></a>
      </div>
      <div className='header-links'>
        <div className='header-a'><LinkA href="/" >Произведения искусства</LinkA></div>
        <div className='header-a'><LinkA href="/" className='header-a'>Художники</LinkA></div>
        <div className='header-a'><LinkA href="/" className='header-a'>Цены</LinkA></div>
        <div className='header-a'><LinkA href="/" className='header-a'>О нас</LinkA></div>
      </div>
      <div className='header-signup'>
      <span>ls;fm</span>
      <span className='header-register'><strong><LinkA href = "/">Вход</LinkA></strong></span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span className='header-register'><strong><LinkA href = "/">Регистрация</LinkA></strong></span>
      </div>
    </header>
  )
}

export default Header;
