import '../../assets/employees/orderCard.css';

const OrdersCard = ({order}) => {

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
          <p className='divisor'>--------------------</p>
        </div>
      </div>
    </div>

  )
}

export default OrdersCard;