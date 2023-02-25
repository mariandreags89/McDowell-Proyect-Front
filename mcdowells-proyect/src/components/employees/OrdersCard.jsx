import { useState } from 'react';
import '../../assets/employees/orderCard.css';
import axios from 'axios'
import { useUserContext } from '../../context/User';



const OrdersCard = ({ ordersDetail, filtered }) => {
  // const [status,setStatus]=useState();
  // const [number,setNumber]=useState();
  const contexUser = useUserContext()

  let status = '';

  const nextStatus = async (one) => {

    const token = contexUser.user.token
    const authAxios = axios.create({
      headers: {
        authorization: token
      }
    })

    if (status !== 5) {
      await authAxios.patch(`http://localhost:3001/api/orders/status/${one}`)
    }
  }


  return (
    <>
      {filtered.map(one => (
        <div className="card_container">
          <div className="card">
            <div className="numOrder">
              <p className='orderNum'>Num order: {one}</p>
            </div>
            {ordersDetail.filter(orderDetail => (orderDetail.id_order === one))
              .map(order =>
                <>
                  <p className='none'>{status = order.id_status}</p>
                  <p className="orderName"> •{order.name}</p>
                  <p className="productQ">Cantidad: {order.units}</p>
                  {(contexUser.user.role === "admin" && order.id_status !== 5) ||
                    (contexUser.user.role === "waiter" && order.id_status !== 5) ||
                    (contexUser.user.role === "chef" && order.id_status !== 3) ?
                    <button className='next' onClick={() => nextStatus(one)}>NEXT STATUS</button> : <></>}
                </>

              )}
          </div>

          <p className='divisor'>--------------------</p>
        </div>
      ))
      }
    </>
  )
}

export default OrdersCard;