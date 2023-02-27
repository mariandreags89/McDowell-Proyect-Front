import { useEffect, useState } from 'react';
import axios from 'axios';
import OrdersCard from "./OrdersCard";
import '../../assets/employees/ordersList.css';

const OrdersList = ({statu, update}) =>{
  
    const [ordersDetail, setOrdersDetail] = useState([]);
    const [filtered, setFiltered]= useState([]);
    const [status, setStatus] = useState(statu.id_status); // nuevo estado
    const [updateList, setUpdateList] = useState(false)

    useEffect(() => {
        const getOrdersDetail = async () => {
            const response = await axios.get(`http://localhost:3001/api/orders/ordersDetail/${statu.id_status}`);
            setOrdersDetail(response.data);
            
        }
        getOrdersDetail();
    }, [status]) // actualiza solo 1 tarjeta

    useEffect(() => {
      let numbers=[];
      for (let i = 0; i < ordersDetail.length; i++) {
        numbers.push(ordersDetail[i].id_order)
      };
     
      setFiltered([...new Set(numbers)]);
    }, [ordersDetail]);
  
    useEffect(()=>{
      update()
    },[updateList])
    
  return (
        <div className="container-card">
            <div className='title-order'>
              <p className='title'>{statu.description}</p>
            </div>
            <div className='statusDiv'>
              <OrdersCard ordersDetail={ordersDetail} filtered={filtered} update={()=>setUpdateList(!updateList)}/>
            </div>
        </div>
  )
}

export default OrdersList;