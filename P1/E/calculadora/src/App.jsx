import './App.css';
import logoLego from './imagenes/logo-lego.png';
import Boton from './componentes/Boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  // Aquí se define el input que será utilizado en la pantala, esto sería gracias a los hooks
  const [input, setInput] = useState('');

  const agregarInput = val=> {
    setInput(input + val);
  };

  const calcularResultado = ()=> {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert("Ingresa Valores en la Calculadora para Procesar los Digitos.");
    }
  }

  return (
    <div className='App'>
      <div className='App__logo-contenedor'>
        <img 
          src={logoLego}
          className='App__logo'
          alt="Logo"
        />
      </div>
      <div className='App__contenedor-calculadora'>

        {/* El primer input menciona el nombre de la variable mientras que el segundo input, sería lo del hook */}
        <Pantalla input={input} />
        <div className='App__fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>

        <div className='App__fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>

        <div className='App__fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>

        <div className='App__fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>

        <div className='App__fila'>
          <BotonClear manejarClear = {()=> setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
