// CONVERTIMOS EL COMPONENTE FUNCIONAL A COMPONENTE DE CLASE

import React from 'react';
import '../hojas-de-estilo/Contador.css';

// ---------- COMPONENTE DE CLASE ----------
class Contador extends React.Component {
  render() {
    return (
      <div className='contador'>
        { this.props.numClics }
      </div>    
    )
  }
};

export default Contador;


// -------- COMPONENTE FUNCIONAL ----------
// const Contador = ({ numClics })=> {
//   return (
//     <div className='contador'>
//       { numClics }
//     </div>    
//   )
// };

// export default Contador;