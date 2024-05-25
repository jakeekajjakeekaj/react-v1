import React from 'react';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import logoLego from './imagenes/logo-lego.png';
// De esta manera importamos al hook useState
// El hook de useState es de los más importantes en REACT
import { useState } from 'react';

const App = ()=> {

  // Empieza el uso el hook y poder hacer dinámico el contador, las variables de numClics y setNumClics son inventadas por nosotros
  // Para este caso el useState se inicializa con valor de 0, aparte de que el numClics será donde se mantendrá almacenada la información, mientras que setNumClics determinará el cambio
  const [numClics, setNumClics] = useState(0);

  // Como se muestra, setNumClics es el que está manejando el cambio
  const manejarClic = ()=> {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = ()=> {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='App__logo-contenedor'>
        <img 
          className='App__logo'
          src={logoLego}
          alt='Logo'
        />
      </div>
      <div className='App__contenedor-principal'>
        <Contador 
          numClics = {numClics}
        />
        <Boton
          texto = 'Clic'
          esBotonDeClic = {true}
          manejarClic = {manejarClic}
        />
        <Boton 
          texto = 'Reiniciar'
          esBotonDeClic = {false}
          manejarClic = {reiniciarContador}
        />
      </div>
    </div>
  );
};

export default App;
