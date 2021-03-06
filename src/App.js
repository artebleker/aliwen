import React from "react";
import './app.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/header/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Catalogue from './pages/Catalogue'
import Conditions from './pages/Conditions'
import Detail from './pages/Detail'
import Error404 from './pages/Error404'
import Kits from './pages/Kits'
import Cart from './pages/Cart'
import Wholesaler from './pages/Wholesaler'
import Footer from './components/footer/Footer'
function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path='/aliwen' element={<Home/>}/>
       <Route path="/nosotros" element={<AboutUs/>}/>
       <Route path="/catalogo/:category" element={<Catalogue/>}/>
       <Route path="/catalogo" element={<Catalogue/>}/>
       <Route path="/terminos-y-condiciones" element={<Conditions/>}/>
       <Route path="/producto/:productName" element={<Detail/>}/>
       <Route path="/kits-para-regalar" element={<Kits/>}/>
       <Route path="/mayorista" element={<Wholesaler/>}/>
       <Route path="/mis-compras" element={<Cart/>}/>
       <Route path="*" element={<Error404/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter> 
    </>
  );
}

export default App;
