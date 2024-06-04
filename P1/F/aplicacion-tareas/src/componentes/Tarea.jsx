import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiTwotoneCloseCircle } from "react-icons/ai";

const Tarea = ({ texto })=> {
  return (
    <div className='tarea-contenedor'>
      <div className='tarea-contenedor__tarea-texto'>
        { texto }
      </div>
      <div className='tarea-contenedor__tarea-contenedor-iconos'>
        {/* Recordemos que lo de abajo es un componente de React, por lo que al indicar className lo estamos indicando como un prop en vez de definir la misma clase de arriba por segunda vez */}
        <AiTwotoneCloseCircle className='tarea-contenedor__tarea-icono' />
      </div>
    </div>
  )
}

export default Tarea;