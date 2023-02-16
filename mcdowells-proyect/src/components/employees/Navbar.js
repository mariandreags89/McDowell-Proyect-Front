import '../../assets/employees/navbar.css';

import logo from '../../assets/images/logo.ico';


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img  className='logo-img' width='100'alt='No existe imagen' src={logo} />
      </div>
      <div className='nav-right'>
        <div className='nav-user'>
        USUARIO logeado
        </div>
      </div>
    </div>
  )
}

export default Navbar