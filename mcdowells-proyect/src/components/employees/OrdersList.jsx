import OrdersCard from "./OrdersCard";
import '../../assets/employees/ordersList.css';

const OrdersList = () => {
  return (
    // <Paper >
    <div className="container-card">
      <div className='title-order'>
        <h1 className='title'>To do</h1>
      </div>
      <OrdersCard />
      <OrdersCard />
    </div>
    // </Paper>
  )
}

export default OrdersList;