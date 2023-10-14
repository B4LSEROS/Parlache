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
            <div className="contenedor-info">
                <div>
                    <h2>¿Qué es Parlache?</h2>
                    <h3>Historia</h3>
                    <h3>Etimología</h3>
                    <h3>Impacto social y cultural</h3>
                </div>
                <div>
                    <ul>
                    <li>Palabra del Día</li>

                    </ul>
                    
                </div>
                <div>
                    <h2>Diccionario</h2>
                    <h3>a</h3>
                    <h3>b</h3>
                </div>
            </div>


        </div>
    );
}

export default PiePagina;