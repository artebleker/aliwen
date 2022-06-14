import React from 'react'
import Counter from '../components/counter/Counter'
import Display from '../components/display/Display'

const Detail = ({product}) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <div className='product-card'>
        <div className='name-pic-price'>
          {product.subname&&
          <h2>{product.subname}</h2>}
          <img src={product.photo} alt={product.name}/>
          <p>${product.price}</p>
        </div>
        <div className='description-counter'>
          <p>{product.description}</p>
          <ul>
            {product.highlights.map((m, index)=>{
              return(
                <li key={index}>{m}</li>
              )
            })}
          </ul>
          <Counter/>
          <Display/>
          <button>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Detail