import './assets/App.css'
import React from 'react';
import ClientsHome from "./components/clients/ClientsHome";
import Menus from './components/clients/Menus';
import Cart from './components/clients/Cart';
import ProductDetails from './components/clients/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import EmailPage from './components/clients/EmailPage';


function App() {
  return (
    <>

      <BrowserRouter>
        <ShoppingCartProvider>
          <Routes>
            <Route path='/' element={<ClientsHome />} />
            <Route path='/menus' element={<Menus />} />
            <Route path='/menus/:id' element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/finishorder' element={<EmailPage/>} />
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>

    </>
  )
}

export default App;
