import React, { useState } from 'react'

function Quantity({quantity,setQuantity}) {
    

    const decrease = () =>{
        setQuantity(quantity-1)
}
    const increase = () =>{
        setQuantity(quantity+1)
}

  return (
    <>
        <button onClick={decrease} disabled={quantity<2}>-</button>
        <div>{quantity}</div>
        <button onClick={increase}>+</button>
    </>
  )
}

export default Quantity