import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import './headerEstilo.css';

function Header () {
  const [scrolled, setScrolled] = useState(false);
  const [mostrarMenu, setMenu] = useState(false);
  const miClase = classNames('encabezado', {'encabezado-scrolled': scrolled});
 

  useEffect(() => {
      const handleScroll = () => {
          const position = window.pageYOffset;
          if (position > 35) { //Si cambia el flexbox debajo del encabezado, ajuste la posición a la altura de este.
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
        <div className= {miClase}>
            <div className='encabezado-titulo'>
                <h1>PARLACHE</h1>
            </div>
             
             {!mostrarMenu && <a href='https://github.com/B4LSEROS/Parlache1'>
             <img src='./iconos/github-mark-white.png' className='icono-github'></img>
             </a>}

            {mostrarMenu && <div className='menu'>
                <input type = 'button' value = '¿Qué es Parlache?'/>
                <input type = 'button' value = 'Palabra del Día'/>
                <input type = 'button' value = 'Diccionario'/>
                <input type = 'button' value = 'Contáctanos'/>
                </div>}
        </div>
    );
}

export default Header;