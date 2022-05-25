import React, { useContext } from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import '../../App'
import LinkA from '../Link/Link';
import { LoginContext } from '../../App';

function Header() {

  const login = useContext(LoginContext)
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
        <div className='header-register'><strong><LinkA href = "/">Вход</LinkA></strong></div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className='header-register'><strong><LinkA href = "/"> Регистрация</LinkA></strong></div>
      </div>
    </header>
  )
}

export default Header;
