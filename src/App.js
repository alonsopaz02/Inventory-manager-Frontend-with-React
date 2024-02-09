import './App.css';
import React from 'react';
import Tabla from './components/Tabla';
import UsuarioIcon from './components/UsuarioIcon'
import BotonMenu from './components/BotonMenu';

//Aqui se deberia llamar al nombre de usuario y su rol en sesion
const usuario = "Alonso";
const rol = "Administrador";

function App() {

  return (
    <div className="App">
      
      <div className="menu-contenedor">
          <UsuarioIcon
            usuario = {usuario}
            rol = {rol}>
          </UsuarioIcon>
        <div className = "fila-boton">
          <BotonMenu>

          </BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu>

          </BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu>

          </BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu>

          </BotonMenu>
        </div>

        <div className = "fila-boton">
          <BotonMenu>

          </BotonMenu>
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
