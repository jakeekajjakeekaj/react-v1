// Componente de Clase

// Un componente de clase es una clase de ES6 (JS moderno) que retorna un elemento JSX

// Los Componente de Clase tienen métodos y estados
// en donde UN MÉTODO es una función asociada a un componente que puede acceder y usar su estado
// ESTRUCTURA:
// class NombreComponente extends React.Component {}

// Las caracteristicas porncipales de un componente de clase son:
/* 
    - Deben extender React.Component
    - Deben tener un método render() para retornar un elemento de JSX
    - Pueden recibir props si es necesario
*/

// El MÉTODO RENDER es un método que retorna la estructura del componente en JSX; es el único método obligatorio para un componente de clase en React.
// Ejemplo de sintaxis
/* 
class NombreComponente extends React.Component {
    render() {
        return <p>Mi Componente</p>;
    }
}
*/

// ¿POR QUÉ SON IMPORTANTES LOS COMPOENNTES DE CLASE?
// Anteriormente usábamos componentes de clase para poder trabajar con "estados" de nuestros componentes, pero luego aparecieron los hooks, provocando así que podamos estar trabajando con hooks o componentes de clase ya que muchos proyectos tenían dentro de sus estructuras a dichos componentes de clase en vez de a los hooks, sin embargo tomando en cuenta eso... ¿SIGUEN SIENDO REELEVANTES?, la respuesta es SI, y esto es porque en su documentación indican que no tienen pensado es eliminar a los componentes de clase ni nada por el estilo, que de hecho lo único que se planea es que existan componentes de clase y hooks en el mismo código. Es decir qu no hay prisa por migrar a hooks y lo único que se tiene pensado hacer es que el nuevo código ya pueda estar conteniendo a los hooks pero que como se dijo anteriormente, los componentes de clase y hooks estén ejecutándose de forma simultánea.

// Los Componentes de Clase también pueen recibir props, para acceder a un prop se tiene:
// this.props.nombreDelProp
// Es decir que con los hooks solo era necesario escribir props.nombreDelProp u ocupar la desestructuración { nombreDelProp }, pero ahora si es necesario con los componentes de clase escribir el this, EJEMPLO:
/*
class Saludos extends React.Component {
    render() {
        return <h1>¡Hola, {this.props.nombre}!</h1>;
    }
}
*/

// Un constructor, debe llamar a super para heredar todas las fucniones del componente "padre" (React.Component)
// El constructor también puede contener props, esto es que is el componente tiene un método constructor y recibe props, deben ser pasados al constructor y al super()
// El objeto "state" (estado) se inicializa en el constructor
// Para acceder al estado se escribiría this.state.propiedad por ejemplo
// Para actualizar una o más propiedades del objeto state, se llama a this.setState() y se pasa como argumento un objeto con las propiedades que se van a actualizar y sus nuevos valores, por ejemplo:
/* 
this.setState({
    completada : false,
    color : 'verde'
});
*/
// SINTAXIS DEL CONSTRUCTOR:

/* 
class Tarea extends React.Component {
    constructor() {
        super();
        this.state = { completada : true };
    }

    render() {
        return <p>Mi Tarea</p><
    }
}
*/

// MÉTODOS DE CICLO DE VIDA: Son métodos especiales de React usados para realizar operaciones con componentes en momentos espeíficos de su vida en el DOM.