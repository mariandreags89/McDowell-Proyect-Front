import axios from "axios";

class OrdersManager {
  static async createOrder(email, order, setNotCreated, setError) {
    let response;

    try {
      response=  await axios.post(`${process.env.REACT_APP_API_URL}/orders/create-order`, email);
      await axios.post( `${process.env.REACT_APP_API_URL}/orders/create-product-order`, order );
    } catch (error) {
      setError(error.response.data.errorsMsg);
      setNotCreated(true);
    }
    return (setNotCreated, setError, response)
  }
 

  static async getOrdersDetail(id_status, setOrdersDetail){
    const getOrdersDetail = async () => {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/orders/ordersDetail/${id_status}`);
      setOrdersDetail(response.data);
    }
    getOrdersDetail();
    return setOrdersDetail
  }
}

export default OrdersManager;
