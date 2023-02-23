
import OrdersList from './OrdersList';
import Navbar from "./Navbar";
import '../../assets/employees/employees.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useUserContext } from "../../context/User";

// const in_status=[1,2,3,4,5].join(); 
 
function Employees() {
  
    const contextUser = useUserContext();
    const [status, setStatus] = useState([]);
    const [access, setAccess] = useState([]);
    const id_user=contextUser.user.id_user

    useEffect(() => {

      const getAccess = async () => {
          const response = await axios.get(`http://localhost:3001/api/worker/${id_user}`);
          setAccess(response.data[0].state);
        
      }
      getAccess();
  }, [id_user])
     

    useEffect(() => {
      
        const getStatus = async () => {
            // const response = await axios.get(`http://localhost:3001/api/status/${in_status}`);
            const response = await axios.get(`http://localhost:3001/api/status/${access}`);
            setStatus(response.data);
            
        }
        getStatus();
    }, [access])

  return (
    <div className='container-employees'>
      <div className='container-navbar'>
        <Navbar/>
      </div>
      <div className='container-list'>
      {status.map((statu) =>(
        <OrdersList statu={statu}/>
      ))}
      </div>
    </div>
  );
}

export default Employees;
