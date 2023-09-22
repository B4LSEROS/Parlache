import React, {useState, useEffect} from 'react';
import './headerEstilo.css';

function Header () {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const position = window.pageYOffset;
          if (position > 60) { //Si cambia el flexbox debajo del encabezado, ajuste la posición a la altura de este.
              setScrolled(true);
          }
          else {
              setScrolled(false);
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
          position: scrolled ? "fixed" : "inherit",
          fontSize: scrolled ? "20px": "30px"}}>
            <h1>PARLACHE</h1>
        </div>
    );
}

export default Header;