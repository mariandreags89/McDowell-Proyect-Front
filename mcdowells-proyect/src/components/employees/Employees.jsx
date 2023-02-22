
import OrdersList from './OrdersList';
import Navbar from "./Navbar";
import '../../assets/employees/employees.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const in_status=[1,2,3,4,5].join();
 
function Employees() {
    const navigate = useNavigate();
    const [status, setStatus] = useState([]);

    useEffect(() => {
        const getStatus = async () => {
            const response = await axios.get(`http://localhost:3001/api/status/${in_status}`);
            setStatus(response.data);
            
        }
        getStatus();
        console.log(status)
    }, [])

  return (
    <div className='container-employees'>
        <div  className="navEmpl"><Navbar/> </div>
      {status.map((statu) =>(
        <OrdersList statu={statu}/>
      ))}

    </div>
  );
}

export default Employees;
