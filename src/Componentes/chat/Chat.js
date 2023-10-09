import React, {useState} from 'react';
import './chat.css';

const Chat = () => {

    const [mensajeUsuario, setMensajeUsuario] = useState('');


    const getMensaje = (event) => {
        setMensajeUsuario(event.target.value);
    }

    function manejarClick () {
        if (mensajeUsuario != '')
        {
            console.log(mensajeUsuario);
            return (<p>{mensajeUsuario}</p>);
        }
    }



    return(
    <div className='chat-contenedor-principal'>
        <div className='chat-banner'>
        
            <p>Habla con El Parcero</p>
        </div>

        <input type='text' className='chat-texto-contenedor' onChange={manejarClick}>
        </input>
        
        <input type='text' 
               placeholder='Parce, escriba aquí su mensaje'
               className='contenedor-mensaje-usuario'
               onChange={getMensaje}>
        </input>
        <img src='/iconos/send.svg' className='icono-enviar' alt="Icono para enviar mensaje." onClick={manejarClick}></img>
        


    </div>)
}

export default Chat;