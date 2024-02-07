import './App.css';
import React from 'react';
import Tabla from './components/Tabla';

function App() {

  return (
    <div className="App">
      <div className="menu-contenedor">
        <div className="usuario-contenedor">

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
