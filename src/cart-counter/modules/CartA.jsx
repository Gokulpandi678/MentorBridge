import { useAtom } from 'jotai'
import React from 'react'
import { cartAtom } from '../../jotai/cartAtom'

const CartA = () => {

    const [count, setCount] = useAtom(cartAtom);

  return (
    <div className='d-flex flex-column align-items-center'>
      <h1>Cart Counter</h1>
      <div className='d-flex gap-3  mb-3'>
        <button onClick={() => setCount(prev => prev+1)} className='w-100'>+</button>
        <button onClick={() => setCount(prev => prev-1)} className='w-100'>-</button>
      </div>
    </div>
  )
}

export default CartA
