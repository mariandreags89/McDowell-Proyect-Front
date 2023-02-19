
import OrdersList from './OrdersList';
import Navbar from "./Navbar";
import '../../assets/employees/employees.css';

function Employees() {
  return (
    <div className='container-employees'>
      <div className='container-navbar'>
        <Navbar/>
      </div>
      <div className='container-list'>
      <OrdersList/>
      <OrdersList/>
      <OrdersList/>
      </div>
    </div>
  );
}

export default Employees;
