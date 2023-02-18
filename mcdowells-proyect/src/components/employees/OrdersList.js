import OrdersCard from "./OrdersCard";
import '../../assets/employees/ordersList.css';

const OrdersList = ({statu}) =>{
  console.log(statu)
  return (
        <div className="container-card">
            <div className='title-order'>
              <h1 className='title'>{statu.description}</h1>
            </div>
            <OrdersCard/>
            <OrdersCard/>
        </div>
  )
}

export default OrdersList;