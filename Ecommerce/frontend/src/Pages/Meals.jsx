 import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';

import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DecriptionBox from '../Components/DecriptionBox/DecriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
const Meals = () => {
  const {all_product}=useContext(ShopContext);
  const {mealId}=useParams();
  const meal=all_product.find((e)=> e.id === Number(mealId));
  
  return (
    

    <div>
    
      <Breadcrum meal={meal}/>
       <ProductDisplay meal={meal}/> 
       <DecriptionBox/>
       <RelatedProducts/>

    </div>
  )
}

export default Meals
