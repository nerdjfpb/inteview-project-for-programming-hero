import React from 'react'

import './formselect.css'

const FormSelect = ({
  setValue,
  defaultValue,
  selectName,
  valuesForSelect,
}) => (
  <div className="form-group">
    <select
      className="form-select"
      defaultValue={defaultValue}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="DEFAULT" disabled>
        {selectName}
      </option>
      {valuesForSelect.map((item) => (
        <option key={item.id} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
)

export default FormSelect
