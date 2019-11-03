import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';



function Navbar() {
    return (
        <div className="Navbar">
            <nav className="App-nav">
            <NavLink exact activeClassName="Navbar-active" to="./">
            Home
            </NavLink>
            <NavLink exact activeClassName="Navbar-active" to="./crisps">
            Crisps
            </NavLink>
            <NavLink exact activeClassName="Navbar-active" to="./soda">
            Soda
            </NavLink>
            <NavLink exact activeClassName="Navbar-active" to="./cupnoodle">
            Cup Noodle
            </NavLink>
        </nav>
       </div>
  
    );
  }



  export default Navbar;