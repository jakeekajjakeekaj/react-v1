// ESTRUCTURA
// Al igual que en HTML, los elementos pueden ser anidados en JSX para formar estructuras más complejas.
// Una vez definida la estructura del componente en el archivo, es importante RENDERIZAR LOS COMPONENTES en la aplicación web.
// EJEMPLO:
/*
const elemento = <h1>¡Hola Mundo!</h1>;

ReactDOM.render(  // ReactDOM tiene que ser importado como import ReactDOM from 'react-dom'
  elemento, // Elemento a Renderizar
  document.getElementById('root') //Contenedor
);
*/
// Hasta aquí como se observa se está definiendo el JSX, seguido de indicando que se insertará en el id root de nuestro HTML

// <div id='root'></div>
// El código JSX se insertaría dentro de este HTML


// -- SELF-CLOSING TAGS
// Estas serían etiquetas que no tienen declaradas etiquetas de cierre, en REACT suelen ser muy utilizadas y un ejemplo de estas sería:
// <img src="logo.png" alt="Mi imagen"/>

// Otro aspecto de JSX es que podemos insertar código JS y suele ir dentro de llaves {JS}
// EJEMPLO:
// let adjetivo = "Interesante";

// <p>React es {adjetivo}</p>

// También se puede escribir cualquier expresión JS:

// <p>El resultado es: {5 * 6}</p>

// Así mismo suelen ser muy usados los operadores ternarios, a continuación se usará un ejemplo de un operador ternario con condiciones anidadas para que se entienda bien el ejemplo:
// Como lo antiguo sin usar ternarios:
/*
if(dia == "lunes") {
  if (compra >= 100) {
    descuento = 10;
  } else {
    descuento = 5;
  }
} else {
  descuento = 0;
}
*/

// Como lo nuevo usando ternarios:
// descuento = (dia == "lunes" ? (compra >= 100 ? descuento = 10 : 5) : 0);