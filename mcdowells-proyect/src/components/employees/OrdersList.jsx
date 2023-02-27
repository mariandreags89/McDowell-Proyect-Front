import { useEffect, useState } from 'react';
import axios from 'axios';
import OrdersCard from "./OrdersCard";
import '../../assets/employees/ordersList.css';
import { useUserContext } from '../../context/User';

const OrdersList = ({ statu }) => {

  const [ordersDetail, setOrdersDetail] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [status, setStatus] = useState(statu.id_status); // nuevo estado
  const contexUser = useUserContext()
  let status2 = '';


  useEffect(() => {
    const getOrdersDetail = async () => {
      const response = await axios.get(`http://localhost:3001/api/orders/ordersDetail/${statu.id_status}`);
      setOrdersDetail(response.data);

    }
    getOrdersDetail();
  }, [status, /*ordersDetail*/])

  useEffect(() => {
    let numbers = [];
    for (let i = 0; i < ordersDetail.length; i++) {
      numbers.push(ordersDetail[i].id_order)
    };

    setFiltered([...new Set(numbers)]);
    console.log(filtered)
  }, [ordersDetail]);


  const nextStatus = async (one) => {

    const token = contexUser.user.token
    const authAxios = axios.create({
      headers: {
        authorization: token
      }
    })

    if (status2 !== 5) {
      await authAxios.patch(`http://localhost:3001/api/orders/status/${one}`)
      // llamar a la función setStatus para actualizar el estado en el componente padre
      setStatus(status2 + 1);

    }
  }




  return (
    <div className="container-card">
      <div className='title-order'>
        <p className='title'>{statu.description}</p>
      </div>
      <div className='statusDiv'>
        {filtered.map(one => (
          <div className="card_container">
            <div className="card">
              <div className="numOrder">
                <p className='orderNum'>Num order: {one}</p>
              </div>
              {ordersDetail.filter(orderDetail => (orderDetail.id_order === one))
                .map(order =>
                  <>
                    <p className='none'>{status2 = order.id_status}</p>
                    <p className="orderName"> •{order.name}</p>
                    <p className="productQ">Cantidad: {order.units}</p>

                  </>

                )}
            </div>
            {(contexUser.user.role === "admin" && status2 !== 5) ||
              (contexUser.user.role === "waiter" && status2 !== 5) ||
              (contexUser.user.role === "chef" && status2 !== 3) ?
              <button className='next' onClick={() => nextStatus(one)}>NEXT STATUS</button> : <></>}
            <p className='divisor'>--------------------</p>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default OrdersList;