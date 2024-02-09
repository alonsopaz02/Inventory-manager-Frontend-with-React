import './App.css';
import React from 'react';
import Tabla from './components/Tabla';
import UsuarioIcon from './components/UsuarioIcon'
import BotonMenu from './components/BotonMenu';
import { FaHome,FaBoxOpen,FaBox,FaBoxes,FaSignOutAlt } from 'react-icons/fa';

//Aqui se deberia llamar al nombre de usuario y su rol en sesion
const usuario = "Alonso";
const rol = "Administrador";

function App() {

  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
      <div className="menu-contenedor">
          <UsuarioIcon
            usuario = {usuario}
            rol = {rol}>
          </UsuarioIcon>
        <div className = "fila-boton">
          <BotonMenu icon={<FaHome />}>Inicio</BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu icon={<FaBoxOpen />}>Registrar entradas</BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu icon={<FaBox />}>Registrar salidas</BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu icon={<FaBoxes />}>Inventario</BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu icon={<FaSignOutAlt />}>Cerrar sesión</BotonMenu>
        </div>

      </div>
      
      <div className="inventario-contenedor">
        <div className="titulo">
          Gestion de Inventario
        </div>

        <div className="tabla-contenedor">
          <div className="tabla">
          <Tabla>
        
          </Tabla>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default App;
