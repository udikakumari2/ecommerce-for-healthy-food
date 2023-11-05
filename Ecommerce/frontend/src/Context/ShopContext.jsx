import React , { createContext } from "react";
import all_product from '../Components/Assests/all_product'
// import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);
const HomeContextprovider =(props) =>{
    const contextValue = {all_product};
    
    return(
        <ShopContext.Provider value={contextValue} >
         {props.children}
        </ShopContext.Provider>
     )
}
export default HomeContextprovider;