// CONVERTIR DE COMPONENTE FUNCIONAL A COMPONENTE DE CLASE

import React from 'react';
import './App.css';
import Boton from './componentes/Boton.jsx';
import Contador from './componentes/Contador.jsx';
import logoLego from './imagenes/logo-lego.png';
// De esta manera importamos al hook useState
// El hook de useState es de los más importantes en REACT
import { useState } from 'react';

// ---------------- COMPOENNTE DE CLASE --------------

class App extends React.Component {
  constructor() {
    // Si definimos al constructor, es importante llamar a super() para así poder tener aceso a todo el componente de React.Component
    super();
    this.state = {
      numClics : 0
    };

    // Al incluir estas lineas podemos trabajar con nuestros componentes, ay que al incluir los métodos dentro de los compoenntes realmente no estarían funcionando, sin embargo ahora gracias al .bind le estamos indicando que se mantenga este valor del constructor al trabajar con estos this, es decir que podemos trabajar con estos contextos dentro de otros y así poder trabajarlos dentro de los componentes
    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic() {
    this.setState(({ numClics })=> ({ numClics: numClics + 1 }));
  };

  reiniciarContador() {
    this.setState({ numClics : 0 })
  };

  render() {
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
            numClics = {this.state.numClics}
          />
          <Boton
            texto = 'Clic'
            esBotonDeClic = {true}
            manejarClic = {this.manejarClic}
          />
          <Boton 
            texto = 'Reiniciar'
            esBotonDeClic = {false}
            manejarClic = {this.reiniciarContador}
          />
        </div>
      </div>
    );
  }
}

export default App;

// ------------ COMPONENTE FUNCIONAL ------------

// const App = ()=> {

//   // Empieza el uso el hook y poder hacer dinámico el contador, las variables de numClics y setNumClics son inventadas por nosotros
//   // Para este caso el useState se inicializa con valor de 0, aparte de que el numClics será donde se mantendrá almacenada la información, mientras que setNumClics determinará el cambio
//   const [numClics, setNumClics] = useState(0);

//   // Como se muestra, setNumClics es el que está manejando el cambio
//   const manejarClic = ()=> {
//     setNumClics(numClics + 1);
//   };

//   const reiniciarContador = ()=> {
//     setNumClics(0);
//   };

//   return (
//     <div className='App'>
//       <div className='App__logo-contenedor'>
//         <img 
//           className='App__logo'
//           src={logoLego}
//           alt='Logo'
//         />
//       </div>
//       <div className='App__contenedor-principal'>
//         <Contador 
//           numClics = {numClics}
//         />
//         <Boton
//           texto = 'Clic'
//           esBotonDeClic = {true}
//           manejarClic = {manejarClic}
//         />
//         <Boton 
//           texto = 'Reiniciar'
//           esBotonDeClic = {false}
//           manejarClic = {reiniciarContador}
//         />
//       </div>
//     </div>
//   );
// };

// export default App;
