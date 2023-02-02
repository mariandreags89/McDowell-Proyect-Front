import React, { useState } from 'react';
import resumen from '../../assets/images/resumen.png'
import pedido from '../../assets/images/resumen2.png'
import '../../assets/clients/cart.css'
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/ShoppingCartContext';
//import { useEffect } from 'react';  *PAULO, ya no haria falta el useEffect
import axios from 'axios';




function Cart() {
    const navigate = useNavigate();
    const context = useCartContext();
    /* const [products, setProducts] = useState([]);
 
     useEffect(() => {
         const getProducts = async () => {
             const response = await axios.get(`http://localhost:3001/api/products/all-products`);
             setProducts(response.data);
         }
         getProducts();
     }, []) */

    const addProduct = (id) => {
        /*PAULO como hacemos map del carrito directamente, no hace falta hacer la peticion de los productos a la BBDD.Pasamos el id del 
        producto que esta en el map por parametro, y el q usamos para buscarlo en el propio carrito */

       const isInCart = context.cart.find(item => item.id_product === id)
       
        if (isInCart) {
            const setOneProd = context.cart.map(item =>  
                item.id_product === isInCart.id_product ? {
                    ...isInCart,
                    quantity: isInCart.quantity + 1,
                    total: isInCart.price * (isInCart.quantity + 1)
                } : item //*PAULO aqui estaba isInCart, x lo q en el carrito modificabas con ese menu, en 
                        //de mantener lo q ya habia (en el ProductDetails lo tenias bien)
            );
            context.setCart(setOneProd); 
           
        } 

        const setTotalPrice = context.totalCart.map((item) => {
            return (
                {
                    totalPrice: item.totalPrice + isInCart.price,
                    totalQuantity: item.totalQuantity + 1 //*PAULO aqui lo mismo, se tiene que ir sumando de 1 en 1
                })
        })
        context.setTotalCart(setTotalPrice)
        console.log(setTotalPrice);

    }


    return (
        <>
            <div className="containerCart">
                <div className='leftContainerCart'></div>
                <div className="centerContainerCart">
                    <div className='topCart'>
                        <img className='resumenimg' src={resumen} alt='NOT FOUND' />
                        <img className='pedido' src={pedido} alt='NOT FOUND' />
                    </div>
                    <div className='centerCart'>
                        {context.cart.map((product) => //*PAULO hacemos map sobre lo que hay en el carrito
                            <div className='topCenterCart' key={product.id_product}>
                                <div>
                                    <p className='menuTitle'>{product.name}</p>
                                </div>

                                <div className='topCenterCartDiv'>
                                    <img className='mcJrCart' src={product.image} alt='NOT FOUND' />
                                    <button className='menos'>-</button>
                                    <div className='cantidad'>{product.quantity}</div>
                                    <button className='mas' onClick={() => addProduct(product.id_product)}>+</button>
                                    <div className='precioUd'>{product.price}€</div>
                                    <div className='precioTotMen'>{product.total}€</div>
                                </div>

                            </div>)}

                        <p className='totalCart'> TOTAL: {context.totalCart[0].totalPrice}€ </p>
                    </div>
                    <div className='bottomCart'>
                        <button className='resumeCart' onClick={() => navigate(`/menus`)}>
                            REANUDAR PEDIDO
                        </button>
                        <button className='finishCart'>
                            FINALIZAR PEDIDO
                        </button>
                    </div>
                </div>
                <div className='rigthContainerMenu'>
                </div>
            </div>
            {/*  <div className="containerCart">
                <div className='leftContainerCart'></div>
                <div className="centerContainerCart">
                    <div className='topCart'>
                        <img className='resumenimg' src={resumen} alt='NOT FOUND' />
                        <img className='pedido' src={pedido} alt='NOT FOUND' />
                    </div>
                    <div className='centerCart'>
                        {products.map((product, index) => //pasar producto e índice
                            <div className='topCenterCart' key={product.id_product}>
                                <div>
                                    <p className='menuTitle'>{product.name}</p>
                                </div>

                                <div className='topCenterCartDiv'>
                                    <img className='mcJrCart' src={product.image} alt='NOT FOUND' />
                                    <button className='menos'>-</button>
                                    <div className='cantidad'>{context.cart[index].quantity}</div>
                                    <button className='mas' onClick={() => addProduct(product.id_product)}>+</button>
                                    <div className='precioUd'>{product.price}€</div>
                                    <div className='precioTotMen'>{product.price * context.cart[0].quantity}€</div>
                                </div>

                            </div>)}

                        <p className='totalCart'> TOTAL: {context.totalCart[0].totalPrice}€ </p>
                    </div>
                    <div className='bottomCart'>
                        <button className='resumeCart' onClick={() => navigate(`/menus`)}>
                            REANUDAR PEDIDO
                        </button>
                        <button className='finishCart'>
                            FINALIZAR PEDIDO
                        </button>
                    </div>
                </div>
                <div className='rigthContainerMenu'>
                </div>
    </div>  */}
        </>
    )
}

export default Cart;
