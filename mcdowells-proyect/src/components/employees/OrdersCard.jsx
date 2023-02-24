
import '../../assets/employees/orderCard.css';



const OrdersCard = ({ordersDetail, filtered}) => {


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
                  <p className="orderName"> •{order.name}</p>
                  <p className="productQ">Cantidad: {order.units}</p>
                </>
                )}
              </div>
              <button className='next'>NEXT STATUS</button>
              <p className='divisor'>--------------------</p>
            </div>
          ))
        }
      </>
  )
}

export default OrdersCard;