import React from 'react'
import { HiOutlineShoppingBag } from "react-icons/hi";
import './cartWidget.css'
const CartWidget = () => {

  let cant = 4; //cambiar por cantidad de productos

  return (
    <div>
      <button className="btn btn-link">
        <HiOutlineShoppingBag fontSize={50} color="#484545" />
      {cant > 0 && (
        <div className="cart-circle">
          <p className="cart-cant">{cant}</p>
          </div>
      )}
      </button>
    </div>
  )
}

export default CartWidget