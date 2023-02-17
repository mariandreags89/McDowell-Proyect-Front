import '../../assets/employees/navbar.css';

import logo from '../../assets/images/logo.ico';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img  className='logo-img' width='100' alt='' src={logo} />
      </div>
      <div className='nav-right'>
      <img className='userImg' src='https://cdn-icons-png.flaticon.com/512/3899/3899618.png' alt='NOT FOUND'/>
        <div className='nav-user'>
        USUARIO logeado
        </div>
      </div>
    </div>
  )
}

export default Navbar