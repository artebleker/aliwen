import React from 'react'
import { testText } from '../test/test'
const Wholesaler = () => {

  const mayorista = testText.find((m)=> m.name === 'Mayorista')

  return (
    <>
    <div>
      <h1>{mayorista.name}</h1>
      <p>{mayorista.text}</p>
    </div>
   
    </>
  )
}

export default Wholesaler