/*
  React es una biblioteca (librería) de JS de código abierto diseñada para crear interfaces de usuario
*/

/* VENTAJAS:
    - Fácil de aprender y usar
    - Componentes reutilizables
    - Crear aplicaciones dinámicas
    - Buen desempeño
*/

// En REACT un Componente es parte de la interfaz de usuario que es independiente y reusable
// Se pueden dividir a estos componentes en muchas categorías, pero las principales serían: FUNCIONALES y DE CLASE; para este caso las que se trabajarán mayormente serán los FUNCIONALES.

// -- Un COMPONENTE FUNCIONAL es una función de JS/ES6 que retorna un elemento de React (JSX).
// EJEMPLO:
// function Saludo(props) {
//   return <h1>¡Hola, {props.nombre}!</h1>;
// }
// Si nos damos cuenta, esto sería como una mezcla entre lo que sería HTML y JS

/*CARACTERÍSTICAS IMPORTANTES DE LOS COMPONENTES FUNCIONALES:
  - Debe retornar un elemento de React(JSX)
  - Debe comenzar con una letra mayúscula
  - Puede recibir valores si es necesario
*/

// En react están los llamados props, que básicamente sería una abreviación a las propiedades, y estos lo que provocan es que cuando se tiene un componente B dentro de un componente A, gracias a las props, dentro del componente B se pueden modificar las propiedades del componente A.
// *** LOS props SOLO PUEDEN SER ENVIADOS DE A hacia B, no de B hacia A, ES DECIR QUE SOLO PUEDEN ENVIARSE DE AFURA HACIA ADENTRO, TAMBIÉN DICHO DE PADRE A HIJO, NO AL REVÉS ***

// -- Un COMPONENTE DE CLASE es una Clase de ES6 (JS moderno) que retorna un elemento JSX.
// EJEMPLO:
// class Saludo extends React.Component {
//   render() {
//     return <h1>¡Hola, {this.props.nombre}!</h1>;
//   }
// }
// SE PUEDE OBSERVAR QUE LA SINTAXIS ES MÁS ELABORADA EN COMPARACIÓN DE LOS COMPONENTES FUNCIONALES

/* CARACTERÍSTICAS IMPORNTANTES DE LOS COMPONENTES DE CLASE
    - Debe extender React.Component
    - Debe tener un método render() para retornar un elemento JSX
    - Puede recibir valores si es necesario
*/

// Estado: Representación en JS del conjunto de propiedades de un componente y sus valores actuales, en este concepto "propiedades" no se refiere a los props, sino a la información que se representa sobre el componente.


// --- POR QUÉ SE TIENEN 2 TIPOS DE COMPONENTES? ES DECIR POR QUÉ TENEMOS COMPONENTES FUNCIONALES Y COMPONENTES DE CLASE?:
// Anteriormentes usábamos componentes de clase para poder trabajar con "estados" de nuestros componentes, en versiones anteriores de REACT (anteriores a 16.8), no podiamos hacerlo en componentes funcionales, pero después vinieron  los hooks (ganchos o anzuelos), permiten agregar cierto estado a los comonentes funcionales, agregando así cierta funcionalidad a los componentes funcionales pudiendo trabajar con los componentes funcionales perfectamente.
// Es decir qie gracias a os hooks ya podemos asignar y actualizar el estado de un componente funcional en REACT.

// Formalmente un HOOK es una función especial que te permite trabajar con estados en componentes funcionales y otros aspectos de REACT. Esto SIN escribir un componente de clase, permitiendo escribir código mucho más conciso y fácil de entender.
// Otro concepto muy importante es el de Event Listener, el cual es una función de JS que es ejecutada cuando ocurre un evento específico. (El EVENT LISTENER también puede ser llamado EVENT HANDLER).

// PARA PODER TRABAJAR CON REACT, ES NECESARIO TENES NODE.JS INSTALADO, ESTO GRACIAS A QUE TIENE EL MOTOR DE GOOGLE INCLUIDO Y ASÍ PODER EJECUTAR JS SIN NINGÚN PROBLEMA.


// +++ INTRODUCCIÓN A JSX +++
// JSX es una extensión de REACT para la sintaxis de JS.
// Permite describir en JS cómo se verán los componentes usando una estructura similar a HTML
/* 
VENTAJAS:
  - Estructura más fácil de visualizar
  - Errores y advertencias más útiles
*/

// JSX ES OPCIONAL, pero si ayudará a escribir código más conciso y legible.
// EJEMPLO:
// const elemento = <h1>¡Hola Mundo!</h1>;

// TIPOS DE ELEMENTOS QUE SE PUEDEN CREAR EN JSX
// Un elemento son unidades más pequeñas de REACT, definen lo que se ve en la pantalla.
// Dicho esto, ¿Cuál es la diferencia entre Elementos y Componentes?
// Pues los COMPONENTES están hechos de ELEMENTOS, es decir:
// Un componente hará algo un poco más complejo que un elemento, un componente contendrá la presentación visual con elemtnso HTML y parecidos, aparte de que un componente puede renderizar o crear otros componentes, es decir que un componente justamente es algo más complejo que un solo elemento, un elemento son como los bloques fundamentales que van a componer al componente como los div o ese tipo de cosas, mientras que el componente ya sería el conjunto de todos estos elementos.

// REACT DOM es un paquete que facilita la interacción y actualización del DOM en aplicaciones REACT.

// Con JSX puedes crear y utilizar cualquier elemento HTML, como ejemplo están los div, img, a, header, nav, p, h1, button, h2, etc.
// Estos se pueden reconocer con base en sus etiquetas, en JSX los elementos HTML se represetan con etiquetas en letras minúsculas, pero los componentes definidos por el usuario tendrán un color diferente y la letra inicial será escrita en MAYÚSCULA.
// En JSX también se pueden agregar atributos para especificar ciertas características así como en HTML, sin embargo algunos se escriben de forma distina, por ejemplo:
// EN HTML para definir una clase sería class="titulo-azul"
// Mientras que en JSX sería className="titulo-azul"
// El nombre cambia ya que class es una palabra reservada de JS, debido a esto al utilizar JSX el nombre debe cambiar

// Otro atributo que cambia sería el for, por ejemplo al definir una label
// <label for="css">CSS</label>
// En HTML sería así como se definió arriba for="css"
// Mientras que en JSX sería htmlFor="css"

// El atributo style acepta un objeto JS con propiedades CSS escritas en camelCase.
// EJEMPLO:
// Para CSS se escribiría background-image
// Mientras que en JSX sería backgroundImage

// Si queremos insertar este código CSS con JSX dentro de nuestro HTML, sería:
//  <div style={estiloDiv}>¡Hola Mundo!</div>
// Como se puede observar, se estaría definiendo el style directamente en la linea de html y al momento de colocar el nombre entre llaves {}, estamos indicando que será código JS
// De igual manera sin necesidad de colocar el nombre, podemos definir las propiedades en linea, por ejemplo:
// <div style={{color : 'yellow'}}>¡Hola Mundo!</div>
// Y de esta manera se definirían las propiedades en linea