import React from 'react'

function Check({
    changeFn,
    isChecked,
    fieldName,
    value,
    label }) {
  return (
    <div>
    <label className="label-radioCh">
        <input 
            type="checkbox"
            onChange={changeFn}
            checked={isChecked}
            name={fieldName}
            value={value}       
        />{' '}
        {label}
    </label>
    </div>
  )
}

export default Check