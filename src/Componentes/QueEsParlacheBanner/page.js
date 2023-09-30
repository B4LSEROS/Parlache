import React from 'react';
import ContenedorBusqueda from '../contenedorBusqueda/ContenedorBusqueda';
import './QueEsParlacheEstilo.css';

function QueEsParlache() {
    return(
        <div className= "main-parlache">
            <h1>Somos lo mejor en la vida, y saldremos adelante tranquila y conscientemente.</h1>
            <p>Parlache es una variante del castellano que se originó en las zonas periféricas de la ciudad de Medellín, está relacionada inherentemente con una demografía marginada por las oportunidades socioeconómicas y politicas que plagaron Colombia durante la segunda mitad del siglo XX.</p>
            <ContenedorBusqueda />
        </div>
    );
}

export default QueEsParlache;