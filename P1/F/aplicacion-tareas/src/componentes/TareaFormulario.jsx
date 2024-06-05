import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

const TareaFormulario = (props)=> {

  const [input, setInput] = useState('');

  const manejarCambio = e=> {
    setInput(e.target.value);
    // console.log(e.target.value);
  }

  const manejarEnvio = e=> {
    // Con el preventDefault se porovoca que el comportamiento predeterminado del botón suceda, es decir se evita que se cargue la página y envíe el formulario por ejemplo
    e.preventDefault();
    // console.log("Enviando Formulario...");

    const tareaNueva = {
      id : uuidv4(),
      texto : input,
      completada : false
    }

    // console.log(tareaNueva);
    props.onSubmit(tareaNueva);
  }

  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}
    >
      <input 
        className='tarea-formulario__tarea-input' 
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-formulario__tarea-boton'>Agregar Tarea</button>
    </form>
  )
}

export default TareaFormulario;