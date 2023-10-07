import React, {useState, useEffect} from 'react';
import Chat from '../chat/Chat';
import './chatEstilo.css';

const ChatContenedor = () => {
    return(
        <div className="chat-contenedor">
            <h1>Así Hablamos</h1>
            <p>El "parlache" es mucho más que palabras y frases; es un vehículo que codifica realidades complejas, llenas de matices y significados.</p>
            
            <p>Este dialecto se ha consolidado como una forma única de expresión que trasciende las fronteras de lo lingüístico para adentrarse en lo cultural y lo social.</p>

            <p>Cada palabra y giro en el "parlache" cuenta historias de lucha, resistencia y pertenencia a comunidades que han forjado su identidad en las calles de Colombia.</p>

            <p>Para enaltecer este elemento de nuestra riqueza cultura, Parlache proporciona un chat de inteligencia artificial que responde en nada más y nada menos que en parlache, ?¡Pruébalo!</p>
            <Chat />
        </div>
    );
};

export default ChatContenedor; 