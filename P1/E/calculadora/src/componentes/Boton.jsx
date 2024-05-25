import React from 'react';

const Boton = (props)=> {

  const esOperador = valor=> {
    // isNotANumber Si el valor no es un número, no es un . y no es un =, se considerará como un valor
    return isNaN(valor) && (valor !== '.') && (valor !== '=')
  }

  return (
      <div
        className={`Boton__boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
        {/* con props.children lo que se indica es que todo lo que esté dentro del App.jsx, que esté declarado dentro de nuestra etiqueta componente, será contenido, por lo que si se tiene un div y un p, estos se "almacenarán dentro de lo que sería el props.children" */}
        {props.children}
      </div>
  )
}

export default Boton;