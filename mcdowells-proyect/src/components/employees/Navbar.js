import '../../assets/employees/navbar.css';

import logo from '../../assets/images/logo.ico';
import logout from '../../assets/images/logout.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img  className='logo-img' width='100' alt='' src={logo} />
      </div>
      <div className='nav-right'>
      <img className='userImg' src='https://cdn-icons-png.flaticon.com/512/3899/3899618.png' alt='NOT FOUND'/>
        <div className='nav-user'>
        CAMARERO
          <img  className='userImg' width='100'  src={logout} alt='' />
          LOG OUT
        </div>
      </div>
    </div>
  )
}

export default Navbar