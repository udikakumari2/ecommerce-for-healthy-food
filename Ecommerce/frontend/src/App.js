
import './App.css';
import Navbar from './Components/Navbar/Navbar';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import men_banner from './Components/Assests/banner_mens.jpg'
import women_banner from './Components/Assests/banner_women.jpg'
import kids_banner from './Components/Assests/banner_kids.jpg' 

import FoodCatergory from './Pages/FoodCatergory';
import Home from './Pages/Home';
import Meals from './Pages/Meals';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <div >
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/Breakfast' element={<FoodCatergory banner={men_banner} category='breakfast'/>}/>
        <Route path='/Lunch' element={<FoodCatergory banner={women_banner}category='lunch'/>}/>
        <Route path='/Dinner' element={<FoodCatergory banner={kids_banner}category='dinner'/>}/>
        <Route path='/meals' element={<Meals/>}>
        <Route path=':mealId' element={<Meals/>}/></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      
    </Routes>
    <Footer/>
    
    </BrowserRouter>
   
  </div>
  );
}

export default App;
