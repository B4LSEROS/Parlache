import React from 'react';
import './estiloPiePagina.css';

function PiePagina() {
    return(
        <div className="pie-pagina">
            <div className="pie-banner">
                <h1>Contáctanos</h1>
                <h1>Recursos</h1>
                <h1>Nuestras Redes:</h1>
            </div>
            <hr style={{ color: 'yellow', border: '2px solid black' }} />


            <p>Hola, nuevo pie de pagina</p>

        </div>
    );
}

export default PiePagina;