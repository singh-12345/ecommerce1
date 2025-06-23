import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import CartPage from './Pages/CartPage'
import ProductDetails  from './Pages/ProductDetails'
import Navbar from './Components/Navbar';
import {Provider} from "react-redux"
import {store} from "./App/Store"

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/product/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App
