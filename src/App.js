import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Header from './Componentes/Header/Header';
import BannerPrincipal from './Componentes/BannerPrincipal/BannerPrincipal';
import QueEsParlache from './Componentes/QueEsParlacheBanner/page';
import PiePagina from './Componentes/PiePagina/PiePagina';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      <BannerPrincipal />
      <QueEsParlache />
      <PiePagina />
    </div>
  );
}

export default App;
