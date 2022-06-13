import React from 'react'
import './product.css'

const Product = (productData) => {

  return (
    <div className='container container-fluid'>
      <img src={productData.productData.photo} alt={productData.productData.name} className='product img-fluid'></img>
      <h4>{productData.productData.name}</h4>
      <h5>${productData.productData.price}</h5>
    </div>
  )
}

export default Product