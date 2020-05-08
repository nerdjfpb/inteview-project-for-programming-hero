import React from 'react'

import './forminput.css'

const FormInput = ({ type, name, placeholder, value, setValue }) => (
  <div className="form-group">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="form-input"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      required
    />
  </div>
)

export default FormInput
