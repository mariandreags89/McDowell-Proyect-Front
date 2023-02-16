import axios from "axios";


class OrdersManager {

    static async createOrder (email, order){

        await axios.post("http://localhost:3001/api/orders/create-order", email)
        await axios.post("http://localhost:3001/api/orders/create-product-order", order)
        return 
    }




}

export default OrdersManager;