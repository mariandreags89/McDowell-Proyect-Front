import "./assets/App.css";
import React from "react";
import ClientsHome from "./components/clients/ClientsHome";
import Menus from "./components/clients/Menus"
import Cart from "./components/clients/Cart";
import ProductDetails from "./components/clients/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import EmailPage from "./components/clients/EmailPage";
import LastPage from "./components/clients/LastPage";
import PageQuestion from "./components/clients/PageQuestion";
import Login from "./components/clients/Login";
import Register from "./components/clients/Register";
import { UserProvider } from "./context/User";
import EmployeesHome from './components/employees/EmployeesHome';
import Employees from './components/employees/Employees'


function App() {
  return (
    <>
      <BrowserRouter>
        <ShoppingCartProvider>
          <UserProvider>
            <Routes>
              <Route path="/" element={<ClientsHome />} />
              <Route path="/menus" element={<Menus />} />
              <Route path="/menus/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/register-or-continue" element={<PageQuestion />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register/new-account" element={<Register />} />
              <Route path="/finishorder" element={<EmailPage />} />
              <Route path="/seeyousoon" element={<LastPage />} />
            <Route path='/employeeslogin' element={<EmployeesHome/>} />
            <Route path='/employees' element={<Employees/>}/>
            </Routes>
          </UserProvider>
        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
}


export default App;
