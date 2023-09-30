import React from 'react';
import ContenedorBusqueda from '../contenedorBusqueda/ContenedorBusqueda';
import './QueEsParlacheEstilo.css';

function QueEsParlache() {
    return(
        <div className= "main-parlache">
            <p> El parlache es una jerga originaria de Colombia que nació en las áreas periféricas, y por ende marginadas, de Medellín. Con el tiempo ha transcendido estos contextos y se ha integrado al habla popular El parlache es una jerga o argot originario de Colombia, especialmente asociada con la ciudad de Medellín y su área metropolitana. Este dialecto urbano nació en contextos marginales y de ilegalidad, pero con el tiempo ha trascendido a otros estratos sociala.</p>
            <ContenedorBusqueda />
        </div>
    );
}

export default QueEsParlache;