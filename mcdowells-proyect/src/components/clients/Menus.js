import React from 'react';
import mcTitle from '../../assets/images/title.png'
import '../../assets/clients/menus.css'


function Menus() {
    return (
        <>
            <div className="containerMenu">
                <div className='leftContainerMenu'></div>
                <div className="centerContainerMenu">
                    <div className='topMenu'>
                        <img className='mcTitle' src={mcTitle} alt='NOT FOUND' />
                    </div>
                    <div className='centerLeft'>
                        <img className='mcJr' src='https://cdn-icons-png.flaticon.com/512/1581/1581006.png' alt='NOT FOUND' />
                        <button className='mcJrBtn'>
                            MENÚ McDOWELL'S JR
                            4,25€
                        </button>
                    </div>
                    <div className='centerRight'>
                        <img className='mcBig' src='https://cdn-icons-png.flaticon.com/512/1581/1581006.png' alt='NOT FOUND' />
                        <button className='mcBtn'>
                            MENÚ McDOWELL'S
                            8,50€
                        </button>

                    </div>
                    <div className='bottomMenu'>
                        <div className='bottomLeft' >
                            <p className='resumen'>Ver resumen del pedido</p>
                            <p className='total' >TOTAL: { }€</p>
                        </div>
                        <div className='bottomRight' >
                            <button className='finishOrder'>
                                FINALIZAR PEDIDO
                            </button>

                        </div>
                    </div>
                </div>
                <div className='rigthContainerMenu'>
                </div>
            </div>
        </>
    )
}

export default Menus;
