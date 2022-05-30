import React, {useContext} from 'react';
import Logo from '../Logo/Logo';
import './Header.css';
import '../../App'
import LinkA from '../Link/Link';
import { LoginContext } from '../../App';
import {useNavigate} from "react-router-dom"

function Header({setLoginState, setToken}) {

  const login = useContext(LoginContext)
  console.log(login)


  const nav = useNavigate()
  function logOut() {
    setLoginState(false)
    setToken("")
    nav("/login")
  }

  return (
    <header>
      <div className='header-logo'>
        <LinkA href='/'><Logo/></LinkA>
      </div>
      <div className='header-links'>
        <div className='header-a'><LinkA href="/ArtInfo" >Произведения искусства</LinkA></div>
        <div className='header-a'><LinkA href="/Artists" className='header-a'>Художники</LinkA></div>
        <div className='header-a'><LinkA href="/earch" className='header-a'>Найти картину</LinkA></div>
        <div className='header-a'><LinkA href="/" className='header-a'>О нас</LinkA></div>
        <div className='header-a'><LinkA href="/login" className='header-a'>Добавить картину</LinkA></div>
      </div>
      {login ? (<div className='header-change'>
        <div className='header-profile'><strong><LinkA href = "/artists/about">Личный кабинет</LinkA></strong></div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className='header-logout'><button className='logout-btn' onClick={logOut}> Выйти</button></div>
      </div>) : (<div className='header-signup'>
        <div className='header-register'><strong><LinkA href = "/login">Вход</LinkA></strong></div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <div className='header-register'><strong><LinkA href = "/register"> Регистрация</LinkA></strong></div>
      </div>)}
    </header>
  )
}

export default Header;
