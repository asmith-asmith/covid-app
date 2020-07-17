import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <header className="App-header">
      <Link to='' className="navbar-brand">Covid Resources</Link>
      <nav>
        <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
        &nbsp;&nbsp;
        <span>WELCOME, {props.user.name}</span>
      </nav>
    </header>
    :
    <header className="App-header">
      <Link to='' className="navbar-brand">Covid Resources</Link>
      <nav>
          <Link to='/login' className='navbar-text'>LOG IN</Link>
          <Link to='/signup' className='navbar-text'>SIGN UP</Link>
      </nav>
    </header>

  return (
    <>
      {nav}
    </>
  );
};

export default NavBar;