import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assests/cart_cross_icon.png'
const CartItems = () => {
    const{all_product,cartItems,addToCart,removeCart}=useContext(ShopContext);
  return (
    <div className='cartItems'>
      <div className="cartitems-format-main">
        <p>Meal</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return  <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image}className='carticon-product-icon' alt="" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quntity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} className='cartitems-remove-icon'onClick={()=>{removeCart(e.id)}} />
            </div>
            <hr/>
          </div>
        }
      })}
     
    </div>
  )
}

export default CartItems
