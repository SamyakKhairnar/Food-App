import React from 'react'
import Logo from './logofoodapp.svg'
import './index.css';


function Header() {
  return (
    <nav className="nav-container">
      <img className='logo' src={Logo} alt="Logo" />
      <ul className='navigation'>
        <li className='nav-menu'>Home</li>
        <li className='nav-menu'>About</li>
        <li className='nav-menu'>Contact</li>
        <li className='nav-menu'>Cart</li>
      </ul>
    </nav>
  );
}

export default Header;
