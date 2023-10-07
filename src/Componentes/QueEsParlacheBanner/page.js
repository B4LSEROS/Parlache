import React from 'react';
import ContenedorBusqueda from '../contenedorBusqueda/ContenedorBusqueda';
import ChatContenedor from '../chatContenedor/ChatContenedor';
import './QueEsParlacheEstilo.css';

function QueEsParlache() {
    return(
        <div className= "main-parlache">
            <h1>¿Qué más, parcero? ¿Bien o qué?</h1>

            <div className= 'introduccion-parlache'>
            <p> El parlache es una forma vernácula del español colombiano, originada principalmente en comunidades urbanas y populares. Este sociolecto se ha consolidado como un fenómeno lingüístico intrigante para sociolingüistas y antropólogos debido a su capacidad para codificar complejas realidades sociales, económicas y culturales.</p> 

            <p>Parlache sirve como una herramienta académica, social y antropológica para estudiar, entender y promover este dialecto colombiano.</p>
            </div>
            <ContenedorBusqueda />
            <ChatContenedor />

        </div>
    );
}

export default QueEsParlache;