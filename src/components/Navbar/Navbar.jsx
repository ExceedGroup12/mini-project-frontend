import React from 'react';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link to='/'>
        <img src={Logo} alt='' />
      </Link>
      <Link to='/'>
        <h1>Toilet App</h1>
      </Link>
    </div>
  );
};

export default Navbar;
