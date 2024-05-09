/* eslint-disable no-unused-vars */
import React from "react";
import './navbar.css'

function NavBar() {
  return (
    <div className="navbar">
   

      <img className="logo" src="/nav-logo.png" alt="" />

      <ul className='navbar-btns'>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
      <div className="nav-left">
        <img className='nav-search' src="nav-search-icon.png" alt="" />
         <img className='nav-noti' src="nav-search-icon.png" alt="" />
        <img className="avatar" src="public/nav-avatar.png" alt="" />
      </div>
    </div>
  );
}

export default NavBar;
