import React from 'react';
import details from '../../assets/images/details.png'
import '../../assets/clients/productdetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useCartContext } from '../../context/ShoppingCartContext';


function ProductDetails() {

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    const context = useCartContext();


    useEffect(() => {
        const getProduct = async () => {
            const response = await axios.get(`http://localhost:3001/api/products/${id}`);
            setProduct(response.data);
            console.log(context.cart)
        }
        getProduct();
    }, [])

    const addProduct = () => {

        //Comprobamos si existe ya en el carrito un producto igual al añadido
        const isInCart = context.cart.find(item => item.id_product === product.id_product)

        /*Si está en el carrito lo que hacemos es recorrerlo y sumamos 1, es decir,  
        todos aquellos cuyo id no coindida, quiero que se mantengan tal cual pero si
        hay algún producto en el carrito que sí coincide, lo que quiero es que me 
        modifique la cantidad, me lo dejas tal cual con ...product pero le 
        añadimos 1 con product.quantity +1 */

        if (isInCart) {
            const setOneProd = context.cart.map(item =>  //En este punto, si coincide isInCart es lo mismo que product
                item.id_product === isInCart.id_product ? {
                    ...item, quantity: item.quantity + 1, total: product.price * (item.quantity + 1)
                } : item
            );
            context.setCart(setOneProd); //Estás limpiando el carrito que había previamente se actualiza con lo nuvo
<<<<<<< HEAD
            
=======

>>>>>>> 0dbe6220d60ff0b3d1357fc56f781bb319ab5c6e
        } else {
            /*Si no está lo que hacemos es otro array que le indicamos que tiene que meter todo
             lo que había previamente en el carrito con ...cart para después añadirle el nuevo 
             producto y la cantidad de este, que es 1 */
            context.cart.push({
                ...product,
                total: product.price,
                quantity: 1

            })
        }

        const setTotalPrice = context.totalCart.map((item) => {
            return (
                {   
                    totalPrice: item.totalPrice + product.price,
<<<<<<< HEAD
                    totalQuantity: item.totalQuantity + 1 // si no existe no puede sumar campo q no hay en product.quantity, por eso sale NAN
                                // como es una cantidad que no diferencia entre tipos de menu, sino total,sumamos de 1 en 1 cuando se llame 
                                // a la funcion
=======
                    totalQuantity: item.totalQuantity + 1
>>>>>>> 0dbe6220d60ff0b3d1357fc56f781bb319ab5c6e
                })
        })
        
        context.setTotalCart(setTotalPrice)//actualizamos el total

    }


    return (
        <>
            <div className="containerDetails">
                <div className='leftContainerDetails'></div>
                <div className="centerContainerDetails">
                    <div className='topDetails'>
                        <img className='detailsTitle' src={details} alt='NOT FOUND' />
                    </div>
                    <div className='detailsContainer' key={product.id_product}>
                        <p className='menu'>{product.name}</p>

                        <div className='centerDetails'>
                            <img className='detailsMc' src={product.image} alt='NOT FOUND' />
                            <p className='pDetails'>
                                {product.description}
                            </p>
                        </div>
                        <p className='menuPrice'>
                            Precio: {product.price}€
                        </p>
                        <p className='menuPrice'>
                            Total carrito: {context.totalCart[0].totalPrice}€
                        </p>

                    </div>

                    <div className='bottomMenu'>
                        <div className='bottomLeftDetails' >
                            <button className='add' onClick={() => addProduct(product.id_product)}>AÑADIR AL PEDIDO</button>
                        </div>
                        <div className='bottomRightDetails'>
                            <button className='select ' onClick={() => navigate(`/menus`)}>VOLVER A SELECCIÓN</button>

                        </div>

                    </div>

                </div>
                <div className='rigthContainerMenu'>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;

/*
                                Hamburguesa de tierna carne de vaca Wagyū, hecha en plancha Jasper a 180ºC para
                                conseguir el punto exacto.
                                <br />
                                Con queso parmesano y queso americano ligeramente ahumado, bacon crispy, lechuga batavia, pomodoro y cebolla morada.
                                <br />
                                Todo ello acompañado de nuestras patatas bastón ecológicas cortadas en el día y cocinadas en aceite de oliva.
 
*/
