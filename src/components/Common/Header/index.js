import React from 'react'
import "./style.css"
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import ToogleTheame from '../ToggleTheme';

function Header() {
  return (
    <div className='navbar'>
      <h1>CryptoTracker<span style={{ color: "var(--blue)" }}>.</span></h1>
      <div className="links">
        <ToogleTheame />
        <NavLink to='/'>
          <p className="link">Home</p>
        </NavLink>
        <NavLink to='/compare'>
          <p className="link">Compare</p>
        </NavLink>
        <NavLink to='/wishlist'>
          <p className="link">Wishlist</p>
        </NavLink>
        <NavLink to='/dashboard'>
          <Button text={"Dashboard"} />
        </NavLink>
      </div>

      <SwipeableTemporaryDrawer />

    </div>
  )
}

export default Header;