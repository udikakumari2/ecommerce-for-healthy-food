import React from 'react'
import './CSS/FoodCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import dropdown_icon from '../Components/Assests/dropdown_icon.png'
import Item from '../Components/Item/Item';
import beverage from '../Components/Assests/beverage';


const FoodCatergory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='shop-catergory'>
      <img className="shopcatergory-banner"src={props.banner} alt="" />
      <div className="shopcatergory-indexsort">
        <p>
          <span>Ahowing 1-12</span>out of 20 Meals
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shocatergor-products">
       
        {all_product.map((item,i)=>{
      
         if(props.category ===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      <h1>Beveragers</h1>
      <div className="shocatergor-products">
      {beverage.map((item,i)=>{
      
      if(props.category ===item.category){
         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
       }
       else{
         return null;
       }
     })}
      </div>
      
      <div className="shopcatergy-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default FoodCatergory
