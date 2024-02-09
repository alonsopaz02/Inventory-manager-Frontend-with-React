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
        <div className="contenedor-icono">
          {props.icon}
        </div>
        
        <div className="nombre-menu">
          {props.children}
        </div>
    </div>
  );
}

export default BotonMenu;