import './App.css';
import logoLego from './imagenes/logo-lego.png';
import Boton from './componentes/Boton.jsx';

function App() {
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
        <div className='App__fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='App__fila'></div>
        <div className='App__fila'></div>
        <div className='App__fila'></div>
        <div className='App__fila'></div>
      </div>
    </div>
  );
}

export default App;
