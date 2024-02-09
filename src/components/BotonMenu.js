import React from 'react';
import '../stylesheets/BotonMenu.css';

const manejarClic = () => {
  console.log("Boton pulsado")
}
function BotonMenu(props) {
  return(
    <div 
      className="contenedor-boton"
      onClick={ () => manejarClic()} >
    </div>
  );
}

export default BotonMenu;