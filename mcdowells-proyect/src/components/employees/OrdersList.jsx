import { useEffect, useState } from 'react';
import axios from 'axios';
import OrdersCard from "./OrdersCard";
import '../../assets/employees/ordersList.css';

const OrdersList = ({ statu }) => {

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
        <p className='title'>{statu.description}</p>
      </div>
      <div className='statusDiv'>
        {ordersDetail.map((order) => (statu.id_status === order.id_status ?
          <OrdersCard order={order} /> : "" ))}
      </div>
    </div>
  )
}

export default OrdersList;