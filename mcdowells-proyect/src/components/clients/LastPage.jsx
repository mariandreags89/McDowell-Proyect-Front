import '../../assets/clients/clientshome.css'
import pronto from '../../assets/images/pronto.png'
import mcTitle from '../../assets/images/title.png'
import vuelva from '../../assets/images/vuelva.png'
import React from 'react';


function LastPage() {

    function redireccionar() {
        // Esta función lo que hace es que redirecciona a la home cuando pasa el tiempo establecido
        // En este caso falta poner que se vacíe el conetxto cuando pase el tiempo, de tal forma que se
        // pueda iniciar un nuevo pedido desde createContext.
        setTimeout("location.href='http://localhost:3000/'", 5000)
        //Falta poner que cuando esto pase el context se reinicie y no quede nada.;
      }
   
    return (
        <>
            <div className="container" onLoad={()=>redireccionar()}>
                <div className='leftContainer'></div>
                <div className="centerContainer">
                    <div className='topDiv'>
                        <img className='mcTitleLast' src={mcTitle} alt='NOT FOUND' />
                    </div>
                    <img className='vuelva' src={vuelva} alt='NOT FOUND' />
                    <img className='pronto' src={pronto} alt='NOT FOUND' />

                    <div className='bottomDiv'>
                    </div>
                </div>
                <div className='rigthContainer'>
                </div>
            </div>
        </>
    )
}

export default LastPage;
