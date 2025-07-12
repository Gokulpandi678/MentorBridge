import React from 'react'
import CartA from './modules/CartA'
import CartB from './modules/CartB'

const Cart = () => {

  return (
    <div className='d-flex flex-column align-items-center'>
      <CartA />
      <CartB />
    </div>
  )
}

export default Cart
