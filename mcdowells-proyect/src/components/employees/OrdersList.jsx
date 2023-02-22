import { useEffect, useState } from 'react';
import axios from 'axios';
import OrdersCard from "./OrdersCard";
import '../../assets/employees/ordersList.css';

const OrdersList = ({statu}) =>{
  
    const [ordersDetail, setOrdersDetail] = useState([]);

    useEffect(() => {
        const getOrdersDetail = async () => {
            const response = await axios.get(`http://localhost:3001/api/orders/ordersDetail/${statu.id_status}`);
            setOrdersDetail(response.data);
            
        }
        getOrdersDetail();
    }, [])

    
  return (
        <div className="container-card">
            <div className='title-order'>
              <h1 className='title'>{statu.description}</h1>
            </div>
            {ordersDetail.map((order) =>(
              <OrdersCard order={order}/>
              ))}
        </div>
  )
}

export default OrdersList;