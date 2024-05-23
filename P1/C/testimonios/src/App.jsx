import './App.css';
// Si la exportación fuera nombrada, el elemento del componente debería de ir entre llaves, { Testimonio }
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Las palabras más sabias que jamás se escucharán</h1>
        {/* De esta manera colocamos el componente dentro de nuestra App */}
        {/* Los argumentos que se muestran abajo, son los argumentos que nuestros props podrán utilizar */}
        <Testimonio 
          nombre = 'El Pepe'
          pais = 'Pepelandia'
          // Para el caso de la imagen, lo que se hace es nombrar aquí la extensión del nombre de la imagen, y en App.js se coloca el ${props.imagen}, para que así agarre toda la extensión y acabe con el número colocado aquí
          imagen = '1'
          cargo = 'Ingenieria de Software'
          empresa = 'Los Pepes'
          testimonio = 'Pepepepe pepepepe pepep pe pe pe pepepe pepe pe ep epe epepe pepe'
        />

        <Testimonio 
          nombre = 'Julia'
          pais = 'Julianda'
          // Para el caso de la imagen, lo que se hace es nombrar aquí la extensión del nombre de la imagen, y en App.js se coloca el ${props.imagen}, para que así agarre toda la extensión y acabe con el número colocado aquí
          imagen = '2'
          cargo = 'Ingenieria de Software'
          empresa = 'Las Julias'
          testimonio = 'Ju ju jujujuj jujujuj jujujuj juju ju juju juj ujuju jujuj uju ju'
        />

        <Testimonio 
          nombre = 'Rio'
          pais = 'Riolandia'
          // Para el caso de la imagen, lo que se hace es nombrar aquí la extensión del nombre de la imagen, y en App.js se coloca el ${props.imagen}, para que así agarre toda la extensión y acabe con el número colocado aquí
          imagen = '3'
          cargo = 'Ingenieria de Software'
          empresa = 'Rios'
          testimonio = 'Ririri riir rir ri rir iririr ir ri rir iririr r rir ri rir ir ir ir r ir ri irir i'
        />
      </div>
    </div>
  );
}

export default App;
