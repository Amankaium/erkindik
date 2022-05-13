import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  return (
    <nav>
      <Link to="/"><Logo /></Link>|&nbsp;
      <Link to="/artworks" >Artworks</Link>|&nbsp;
      <Link to="/artists" >Artists</Link>|&nbsp;
      <Link to="/pricing" >Pricing</Link>|&nbsp;
      <Link to="/sell-art" >Sell art</Link>|&nbsp;
      <Link to="/search" >Search</Link>|&nbsp;
      <Link to="/login" >Sign in</Link>|&nbsp;
      <Link to="/register" >Sign up </Link>
    </nav>
  )
}

export default Header;
