import React, {useState} from 'react';

import './estiloContenedorBusqueda.css';

const ContenedorBusqueda = () => {

    const [valorBusqueda, setValorBusqueda] = useState('');
    const [colorTexto, setColorTexto] = useState('');


    const manejarBotonBuscar = (event) => {

        setValorBusqueda(event.target.value);   

    }

    const cambiarColorTexto = (event) => {
        const palabra = event.target;
        const getColor = palabra.style.backgroundColor = "yellow";

        setColorTexto(getColor);
    }

    function mostrarBusqueda () {
        window.alert("Su palabra es " + valorBusqueda);

    }

    return(
        <div className = 'contenedor-buscador'>
            
            <p>Haga su consulta para conocer más sobre el parlache.</p>

            <div className = 'contenedor-busqueda'>
                <select placeholder = 'Selectores' className='campos'>
                    <option>Aleatoia</option>
                    <option>Contiene</option>
                    <option>Empieza por</option>
                </select>
                <input 
                    type = 'text'
                    placeholder = 'Su palabra aquí' 
                    className='campos'
                    onChange={manejarBotonBuscar}></input>
                <input type = 'button' value = 'Buscar' className='campos' onClick={(event) => {mostrarBusqueda(event);}}></input>
            </div>

        </div>
    );
};

export default ContenedorBusqueda;