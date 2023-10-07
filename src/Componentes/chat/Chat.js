import React from 'react';
import './chat.css';

const Chat = () => {
    return(
    <div className='chat-contenedor-principal'>
        <div className='chat-banner'>
        <img src='/public/iconos/send.svg' className='icono-enviar'></img>
            <p>Habla con El Parcero</p>
        </div>
        <input type='text' className='chat-texto-contenedor'>
        </input>
        
        <input type='text' 
               placeholder='Parce, escriba aquí su mensaje'
               className='contenedor-mensaje-usuario'>
        </input>
        


    </div>)
}

export default Chat;