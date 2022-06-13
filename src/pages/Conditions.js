import React from 'react'
import { testText } from '../test/test'
import './conditions.css'
const Conditions = () => {
  const termsAndConditions = testText.find((f)=>f.name === 'Terminos y Condiciones')
  return (
    <div className='conditions container container-fluid'>
      <h1>{termsAndConditions.name}</h1>
      <p>{termsAndConditions.text}</p>
    </div>
  )
}

export default Conditions