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
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cartitems-total-items">
                    <p>
                        Subtotal
                    </p>
                    <p>${0}</p>
                </div>
                <hr/>
                <div className='cartitems-total-items'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-items'>
                    <h3>Total</h3>
                    <h3>${0}</h3>
                </div>

            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have promo code,Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div>
      </div>
     
    </div>
  )
}

export default CartItems
