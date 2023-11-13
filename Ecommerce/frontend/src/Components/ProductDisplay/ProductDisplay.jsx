import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
  const {meal}=props;
  const {addToCart}=useContext(ShopContext);
  return (
    <div className='productDisplay'>
      <div className="productDisplay-left">
        <div className="productDisplay-img-list">
          <img src={meal.image} alt="" />
          <img src={meal.image} alt="" />
          <img src={meal.image} alt="" />
          <img src={meal.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img"src={meal.image} alt="" />
        </div>
      </div>
      <div className="productDisplay-right">
        <h1>{meal.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="prodctdisplay-right-pric-old">
            ${meal.old_price}
          </div>
          <div className="prodctdisplay-right-pric-new">
            ${meal.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
        Food is usually of plant, animal, or fungal origin and contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, 
        maintain life, or stimulate growth.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(meal.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-catergory'><span>Catergory :</span>BreakFast,Dishs,Beverages</p>
        <p className='productdisplay-right-catergory'><span>Tag:</span>Moden,latest,Beverages</p>
      </div>
    </div>
  )
}

export default ProductDisplay 
