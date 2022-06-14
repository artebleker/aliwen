import React from 'react'
import './counter.css'
const Counter = () => {

  const cant = 4
  return (
    <div className='counter'>
      <button className='btn btn-link'>+</button>
      <p>{cant}</p>
      <button className='btn btn-link'>-</button>
    </div>
  )
}

export default Counter