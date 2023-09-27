import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import Header from './Componentes/Header/Header';
import BannerPrincipal from './Componentes/BannerPrincipal/BannerPrincipal';
import './App.css';

function App() {
  return (
    
    <div className="App">
      <Header />
      <BannerPrincipal />


      <div className='header'>
        <h1>PARLACHE</h1>
        <h2>PARLACHE</h2>
      </div>








      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
