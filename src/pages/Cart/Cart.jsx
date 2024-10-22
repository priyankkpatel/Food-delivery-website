import React , { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/storeContext'

const Cart = () => {

  const {cartItem,food_list,removeFromcart} = useContext(StoreContext)

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <br />
        <br />
          

      </div>
      <hr />
    </div>
    
  )
}
export default Cart

