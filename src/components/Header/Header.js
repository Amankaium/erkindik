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
      <Link to="/login" >Login</Link>|&nbsp;
      <Link to="/register" >Register </Link>
      <Link to="/ArtInfo">Art Info</Link>
    </nav>
  
  )
}

export default Header;
