import React from 'react';

import './estiloContenedorBusqueda.css';

const ContenedorBusqueda = () => {







    return(
        <div className = 'contenedor-buscador'>
            <p>Haga su consulta para conocer más sobre el parlache.</p>
            <p>Consulta gracias al apoyo de la RAE, Universidad de Antioquia y Ministerio de cultura de Colombia</p>
            <div className = 'contenedor-busqueda'>
                <select placeholder = 'Selectores' className='campos'>
                    <option>Aleatoria</option>
                    <option>Empieza por</option>
                </select>
                <input 
                    type = 'text'
                    placeholder = 'Su palabra aquí, parcero' className='campos'
                        >

                        </input>
                <input type = 'button' value = 'Buscar' className='campos'></input>

            </div>

        </div>
    );
};

export default ContenedorBusqueda;