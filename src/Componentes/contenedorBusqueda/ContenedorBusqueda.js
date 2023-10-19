import React from 'react';

import './estiloContenedorBusqueda.css';

const ContenedorBusqueda = () => {
    return(
        <div className = 'contenedor-buscador'>
            
            <p>Haga su consulta para conocer más sobre el parlache.</p>

            <div className = 'contenedor-busqueda'>
                <select placeholder = 'Selectores' className='campos'>
                    <option>Aleatoria</option>
                    <option>Contiene</option>
                    <option>Empieza por</option>
                </select>
                <input 
                    type = 'text'
                    placeholder = 'Su palabra aquí' 
                    className='campos'></input>
                <input type = 'button' value = 'Buscar' className='campos'></input>
            </div>

        </div>
    );
};

export default ContenedorBusqueda;