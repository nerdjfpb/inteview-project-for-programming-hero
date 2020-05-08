import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from './logo.png'

import './navbar.css'

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__container">
      <div className="navbar__left-side">
        <NavLink to="/">
          <img src={logo} alt="logo" className="logo" />
        </NavLink>
      </div>
      <div className="navbar__right-side">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/single-search">
              Single Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/hotel-details">
              Hotel Details
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Log in
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-btn" to="/sign-up">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
