import './App.css';
import logo from './imagenes/logo-lego.png';
import Tarea from './componentes/Tarea.jsx';

function App() {
  return (
    <div className='app-tareas'>
      <div className='app-tareas__logo-contenedor'>
        <img
          src={ logo }
          className='app-tareas__logo'
          alt='imagen-logo'
        />
      </div>
      <div className='app-tareas__tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React' />
      </div>
    </div>
  );
}

export default App;
