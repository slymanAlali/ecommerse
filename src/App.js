import './App.css';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop';
import ShopCategory from './pages/ShopCategory.jsx'
import  Product from './pages/Product';
import { Cart } from './pages/Cart';
import { LoginSignUp } from './pages/LoginSignUp';
import Footer from './component/footer/Footer';
import men_banner from './component/Assets/banner_mens.png'
import women_banner from './component/Assets/banner_women.png'
import kid_banner from './component/Assets/banner_kids.png'
import all_product from './new_product';

function App() {
  return (
      <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
        <Route path='/product' element={<Product />}>
        <Route path=':productId' element={<Product />} />
        </Route>
      <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<LoginSignUp/>} /> 
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
