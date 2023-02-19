import '../../assets/employees/orderCard.css';

const OrdersCard = () => {
  return (
    <div className="card_container">
      <div className="card">
        <div className="numOrder">
          <p className='orderNum'>Num order</p>
        </div>
          <div className="content-text">
              <h4 className="paragraph">articulo X</h4>
              <p className="paragraph">description1</p>
              <p className="paragraph">unidades</p>
          </div>
         </div>
    </div>
    
  )
}

export default OrdersCard;