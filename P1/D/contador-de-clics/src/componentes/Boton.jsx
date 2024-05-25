import React from 'react';
import '../hojas-de-estilo/Boton.css';

// Para este paso se usará el método de desestructuración, es decir que no es necesario recibir a props y después escribir {props.texto}, sino que gracias al método de desestructuración solo basta con recibir en vez de props, recibimos el { texto }
const Boton = ({ texto, esBotonDeClic, manejarClic })=> {
  return (
    <button
      className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      onClick={ manejarClic }
    >
      { texto }
    </button>
  )
}

export default Boton;