import '../../assets/clients/clientshome.css'
import welcome from '../../assets/images/welcome.png'
import mcTitle from '../../assets/images/title.png'
import React from 'react';


function ClientsHome() {
    return (
        <>
            <div className="container">
                <div className='leftContainer'></div>
                <div className="centerContainer">
                    <div className='topDiv'>
                        <img src={welcome} alt=" NOT FOUND" />
                        <img className='mcTitle' src={mcTitle} alt='NOT FOUND' />
                    </div>
                    <img className='logo' src='https://cdn-icons-png.flaticon.com/512/2794/2794569.png' alt='NOT FOUND' />
                    <div className='bottomDiv'>
                        <button className='start'>EMPEZAR PEDIDO</button>
                    </div>
                </div>
                <div className='rigthContainer'>
                </div>
            </div>
        </>
    )
}

export default ClientsHome;
