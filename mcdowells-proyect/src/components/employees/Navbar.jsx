import '../../assets/employees/navbar.css';
import logo from '../../assets/images/logo.ico';
import logout from '../../assets/images/logout.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='leftNav'>
        <img className='logo-img' alt='NOT FOUND' src={logo} />
        <img className='emplImg' src='https://cdn-icons-png.flaticon.com/512/3899/3899618.png' alt='NOT FOUND' />
        CAMARERO
      </div>
      <div className='rightNav'>
        <img className='logOutImg' src='https://cdn-icons-png.flaticon.com/512/8771/8771121.png' alt='NOT FOUND' />
        LOG OUT
      </div>
    </div>
  )
}

export default Navbar