import React from 'react'
import { Link } from 'react-router-dom'

import './welcome.css'

const Welcome = () => (
  <div className="container">
    <div className="welcome">
      <h1 className="heading1">
        Welcome to interview project for programming hero!
      </h1>
      <p>I made total 5 pages for the inteview and they are -</p>
      <ul>
        <li>
          <Link to="login">Log In</Link>
        </li>
        <li>
          <Link to="sign-up">Sign Up</Link>
        </li>
        <li>
          <Link to="search">Search</Link>
        </li>
        <li>
          <Link to="single-search">Single Search</Link>
        </li>
        <li>
          <Link to="hotel-details">Hotel Details</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Welcome
