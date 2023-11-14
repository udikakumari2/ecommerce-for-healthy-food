import React , { createContext, useState } from "react";
import all_product from '../Components/Assests/all_product'
// import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index<all_product.length + 1;index++){
        cart[index]=0;
    }
    return cart;
}
const HomeContextprovider =(props) =>{
    const [cartItems,setCartItems]=useState(getDefaultCart());
   
    //console.log(cartItems)
    const addToCart =(itemId) =>{
            setCartItems((prev)=>({
                ...prev,[itemId]:prev[itemId]+1
            }))
    }
    const removeCart =(itemId) =>{
        setCartItems((prev)=>({
            ...prev,[itemId]:prev[itemId]-1
        }))
}
    
  const getTotalCartAmount = ()=>{
    let totalAmount =0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let itemInfor =  all_product.find((product)=>product.id===Number(item))
            totalAmount +=itemInfor.new_price * cartItems[item];
        }
        
    }
    return totalAmount;
  }
  const getTotalCartItems =()=>{
    let totalItem=0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalItem+=cartItems[item]
        }
    }
    return totalItem;
  }
const contextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,removeCart};
    return(
        <ShopContext.Provider value={contextValue} >
         {props.children}
        </ShopContext.Provider>
     )
}
export default HomeContextprovider;