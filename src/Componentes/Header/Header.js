import React, {useState, useEffect} from 'react';
import './headerEstilo.css';

function Header () {
  const [scrolled, setScrolled] = useState(false);
  const [mostrarMenu, setMenu] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const position = window.pageYOffset;
          if (position > 30) { //Si cambia el flexbox debajo del encabezado, ajuste la posición a la altura de este.
              setScrolled(true);
              setMenu(true);
          }
          else {
              setScrolled(false);
              setMenu(false);
          }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
          window.removeEventListener("scroll", handleScroll);
      };
  }, []);
    return(
        <div className= "main" style={{
          width: scrolled ? "20%" : "100%",
          height: scrolled ? "100vh" : "150px",
          position: scrolled ? "fixed" : "inherit",
          fontSize: scrolled ? "20px": "30px"}}>
            <h1>PARLACHE</h1>
            {mostrarMenu && <div className='menu'>
                <input type = 'button' value = '¿Qué es Parlache?'/>
                <input type = 'button' value = 'Palabra del Día'/>
                <input type = 'button' value = 'Diccionario'/>
                <input type = 'button' value = 'Contáctanos'/>
                <input type = 'button' value = 'Contribuye'/>
                </div>}
        </div>
    );
}

export default Header;