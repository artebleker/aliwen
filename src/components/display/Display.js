import React from 'react'
import './display.css'

const Display = () => {
let cant = 4
let price = 540

  return (
    <div className='display'>
      <p>{cant} X ${price} = {cant*price}</p>
    </div>
  )
}

export default Display