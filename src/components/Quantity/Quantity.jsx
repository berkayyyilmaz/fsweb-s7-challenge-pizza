import React, { useState } from 'react'

function Quantity({formData,setFormData}) {
    

    const decrease = () =>{
      setFormData({...formData, quantity:formData.quantity-1})
}
    const increase = () =>{
      setFormData({...formData, quantity:formData.quantity+1})
}

  return (
    <>
        <button type='button' onClick={decrease} disabled={formData.quantity<2}>-</button>
        <div>{formData.quantity}</div>
        <button type='button' onClick={increase}>+</button>
    </>
  )
}

export default Quantity