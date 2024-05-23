import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

// componente funcional
// Para este caso pasamos los props, que es lo que nos ayudará a tener diferente contenido en los mismos componentes
const Testimonio = (props)=> {
  return (
    <div className='contenedor-testimonio'>
      {/* Algunas cosas que se harán abajo serán temporales hasta que se trabaje con los prompts */}
      <img 
        className='imagen-testimonio'
        // Recordemos que entre llaves va el código JS
        src={require(`../imagenes/img-${props.imagen}.png`)}
        alt={`imagen-${props.imagen}-testimonio`}
      />
      <div className='contenedor-texto-testimonio'>
        {/* <p className='nombre-testimonio'>El Pepe</p>
        <p className='cargo-testimonio'>Ingeniería de Software en Los Pepes</p>
        <p className='texto-testimonio'>pepepe epepepeepeepe pepeepeppepepepe epepepepeepepee epepepeepepepepee pepepepeepepeppepepepepeppe epepee pe epepepe ep epepe epep ep epe pepe ep ep epepeppe ep epepepe</p> */}
        {/* Se usa strong en vez de b, ya que con strong se indican los temas importantes para el SEO */}
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> de {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}

// Existen 2 tipos de exportaciones en REACT, la nombrada y por defecto (default)
// La exportación nombrada puede exportar varios elementos de un mismo archivo, es por esto que terminan siendo especificados para de esta manera declarar específicamente lo que se quiere exportar
// La exportación por defecto exporta al archivo por defecto

export default Testimonio;

// Para las exportaciones nombradas, lo que se tiene que hacer es que las exportaciones ya no se realizan al final, es decir que el export del final se borraría y en su lugar se escribiía: export const Testimonio = ()=> {}
// De esta manera se estaría haciendo una exportación nombrada, esto sirve por si queremos seccionar al código y solo exportar ciertos elementos.
// Para lo que sería la importación únicamente en nuestra App.js lo que tendriamos que hacer es: import { Testimonio } from './componentes/Testimonio';
// Es decir como lo normal, solo que ahora lo nombramos entre llaves, de esta manera podríamos indicar qué elementos queremos que se importen específicamente de nuestro componente