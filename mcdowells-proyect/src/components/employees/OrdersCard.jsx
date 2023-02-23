import '../../assets/employees/orderCard.css';

const OrdersCard = ({order}) => {


  return (
    <div className="card_container">
      <div className="card">
        <div className="numOrder">
          <p className='orderNum'>Num order: {order.id_order}</p>
        </div>
          <div className="content-text">
              <h4 className="paragraph">{order.id_product}</h4>
              <p className="paragraph">{order.name}</p>
              <p className="paragraph">{order.units}</p>
          </div>
         </div>
    </div>
    
  )
}

export default OrdersCard;