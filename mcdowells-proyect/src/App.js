import './assets/App.css'
import React from 'react';
import ClientsHome from "./components/clients/ClientsHome";
import Menus from './components/clients/Menus';
import Cart from './components/clients/Cart';
import ProductDetails from './components/clients/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext';
import EmailPage from './components/clients/EmailPage';
import LastPage from './components/clients/LastPage';
import EmployeesHome from './components/employees/EmployeesHome';


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
            <Route path='/seeyousoon' element={<LastPage/>}/>
            <Route path='/employeeslogin' element={<EmployeesHome/>} />
          </Routes>
        </ShoppingCartProvider>
      </BrowserRouter>

    </>
  )
}

export default App;
