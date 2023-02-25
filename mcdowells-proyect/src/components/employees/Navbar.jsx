import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/employees/navbar.css';
import logo from '../../assets/images/logo.ico';
import { useUserContext } from "../../context/User";
import axios from 'axios';


const Navbar = () => {

  const navigate = useNavigate();
  const contextUser = useUserContext();
  const username= (contextUser.user.username).toUpperCase();


  const logOut = () => {
    contextUser.setUser([])
    navigate('/employees-login')
    

  }
  return (
    <div className='navbar'>
      <div className='leftNav'>
        <img className='logo-img' alt='NOT FOUND' src={logo} />
        <img className='emplImg' src='https://cdn-icons-png.flaticon.com/512/3899/3899618.png' alt='NOT FOUND' />
        {username}
      </div>
      <div className='rightNav'>
        <img className='logOutImg' src='https://cdn-icons-png.flaticon.com/512/8771/8771121.png' alt='NOT FOUND' onClick={() => logOut()} />
        LOG OUT
      </div>
    </div>
  )
}

export default Navbar