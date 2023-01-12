import React from 'react'
import Logo from './logofoodapp.png'
import './index.css';


function Header() {
  return (
    <nav className="nav-container">
      <img className='logo' src={Logo} alt="Logo" />
      <ul className='navigation'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

export default Header;
