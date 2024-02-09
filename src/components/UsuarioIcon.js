import React from "react";
import icon from "../imagenes/usuario.png"
import '../stylesheets/UsuarioIcon.css'

function UsuarioIcon(props){
    return(
      <div className="contenedor">
        <img 
          className="icon"
          src={icon}
          alt="Icono de usuario">
        </img>
        <div className="nombre-de-usuario">
          {props.usuario}
        </div>
        <div className="rol-de-usuario">
          {props.rol}
        </div>
      </div>
    );
};

export default UsuarioIcon