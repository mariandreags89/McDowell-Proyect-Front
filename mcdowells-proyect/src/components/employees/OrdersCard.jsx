import { useState } from 'react';
import '../../assets/employees/orderCard.css';
import axios from 'axios'



const OrdersCard = ({ordersDetail, filtered}) => {
  // const [status,setStatus]=useState();
  // const [number,setNumber]=useState();
  let status='';
 
  const nextStatus = async (one) => {
    //  console.log(one.one,status)
      if (status !== 5) {
      await axios.patch(`http://localhost:3001/api/orders/status/${one.one}`)
    } 
  }


  return (
    <>
        {filtered.map(one =>(
            <div className="card_container">
              <div className="card">
                <div className="numOrder">
                  <p className='orderNum'>Num order: {one}</p>
                </div>
                {ordersDetail.filter(orderDetail =>(orderDetail.id_order===one))
                .map(order => 
                <>
                  <p className='none'>{status=order.id_status}</p>
                  <p className="orderName"> •{order.name}</p>
                  <p className="productQ">Cantidad: {order.units}</p>
                </>
                )}
              </div>
              <button className='next' onClick={() => nextStatus({one})}>NEXT STATUS</button>
              <p className='divisor'>--------------------</p>
            </div>
          ))
        }
      </>
  )
}

export default OrdersCard;