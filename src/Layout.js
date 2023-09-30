import React from 'react';
import Header from './Componentes/Header/Header';
import PiePagina from './Componentes/PiePagina/PiePagina';


const Layout = ({children}) => {
    return(
        <>
        <Header />
        {children}
        <PiePagina />
        </>
    );

}


export default Layout;