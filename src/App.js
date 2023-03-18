import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Automative from './components/Automative';
import Bag_Female from './components/Bag_Female';
import Cart from './components/Cart';
import Decoration from './components/Decoration';
import Dress_Female from './components/Dress_Female';
import Dress_Male from './components/Dress_Male';
import Footer from './components/Footer';
import Fragrance from './components/Fragrance';
import Furniture from './components/Furniture';
import Groceries from './components/Groceries';
import Home from './components/Home';
import Jewellery from './components/Jewellery';
import Laptop from './components/Laptop';
import Lighting from './components/Lighting';
import Login from './components/Login';
import Motorcycle from './components/Motorcycle';
import Navbar from './components/Navbar';
import Phones from './components/Phone';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shoe_Female from './components/Shoe_Female';
import Shoe_Male from './components/Shoe_Male';
import Single_Product from './components/Single-Product';
import Skincare from './components/Skincare';
import Sunglass from './components/Sunglass';
import Tops from './components/Tops';
import Watch_Female from './components/Watch_Female';
import Watch_Male from './components/Watch_Male';
import CartContextProvider, { CartContext } from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
    <div className="wrapper">
        <Navbar />
        <Cart />

        <Routes>

          <Route path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />

          <Route element = {<RequireAuth />}>
            <Route path = "/products/phone" element = {<Phones />} />
            <Route path = "/products/laptop" element = {<Laptop />} />
            <Route path = "/products/fragrance" element = {<Fragrance />} />
            <Route path = "/products/skincare" element = {<Skincare />} />
            <Route path = "/products/groceries" element = {<Groceries />} />
            <Route path = "/products/decoration" element = {<Decoration />} />
            <Route path = "/products/furniture" element = {<Furniture />} />
            <Route path = "/products/tops" element = {<Tops />} />
            <Route path = "/products/outfit_female" element = {<Dress_Female />} />
            <Route path = "/products/shoe_female" element = {<Shoe_Female />} />
            <Route path = "/products/outfit_male" element = {<Dress_Male />} />
            <Route path = "/products/shoe_male" element = {<Shoe_Male  />} />
            <Route path = "/products/watch_male" element = {<Watch_Male />} />
            <Route path = "/products/watch_female" element = {<Watch_Female />} />
            <Route path = "/products/bag_female" element = {<Bag_Female />} />
            <Route path = "/products/jewellery" element = {<Jewellery />} />
            <Route path = "/products/sunglass" element = {<Sunglass />} />
            <Route path = "/products/automotive" element = {<Automative />} />
            <Route path = "/products/motorcycle" element = {<Motorcycle />} />
            <Route path = "/products/lighting" element = {<Lighting />} />

            <Route path = "/product/:id" element = {<Single_Product />} />

          </Route>

        </Routes>
        <Footer />
    </div>
  </CartContextProvider>
  </BrowserRouter>
  );
}

export default App;
