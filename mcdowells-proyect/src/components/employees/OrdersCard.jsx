
import '../../assets/employees/orderCard.css';
import axios from 'axios'



const OrdersCard = ({ordersDetail, filtered}) => {

  const nextStatus = async () => {
    console.log(order.id_status)
    if (order.id_status !== 5) {
       await axios.patch(`http://localhost:3001/api/status/setStatus/${order.id_order}`)
    } 
  }
  return (
    <div className="card_container">
      <div className="card">
        <div className="numOrder">
          <p className='orderNum'>Num order: {order.id_order}</p>
        </div>
        <div className="content-text">
          <p className="orderNum">{order.id_product}
           
          </p>
          <p className="orderName"> •{order.name}</p>
          <p className="productQ">Cantidad: {order.units}</p>
          <button className='next'>NEXT STATUS</button>
          <button className='next' onClick={() => nextStatus()}>NEXT STATUS</button>
          <p className='divisor'>--------------------</p>
        </div>
      </div>
    </div>

  )
}

export default OrdersCard;