import axios from "axios";

class OrdersManager {
  static async createOrder(email, order, setNotCreated, setError) {
    let response;
    try {
      response=  await axios.post("http://localhost:3001/api/orders/create-order", email);
      await axios.post( "http://localhost:3001/api/orders/create-product-order", order );
    } catch (error) {
      setError(error.response.data.errorsMsg);
      setNotCreated(true);
    }
    return (setNotCreated, setError, response)
  }
 
}

export default OrdersManager;
