import React from 'react'

import './button.css'

const Button = ({ value, onClickHandler }) => (
  <button className="btn" onClick={onClickHandler}>
    {value}
  </button>
)

export default Button
