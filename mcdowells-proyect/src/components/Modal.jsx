import '../assets/clients/modal.css'

const Modal = (props) => {



    return <>
        <div className="containerModal">
            
            <div className="containerModal_1" onClick={props.back}>
                
                    <h1 className="textModal">{props.title}</h1>
                    <div></div>
                    <p className="textModal_P">{props.text}</p>
                    <button className='btnModal' onClick={props.route}>ACEPTAR</button>
                
            </div>
            
        </div>


    </>
}

export default Modal;