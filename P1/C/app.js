// Se creará una nueva aplicación en donde se recreará un fragmento de una página

// Lo que se hace es npx create-react-app testimonios
// Listo, ya creamos nuestro proyecto REACT, ahora dentro de src creamos un nueva carpeta llamada componentes, y dentro creamos un archivo llamado Testimonio.js

// Para este caso se estarán creando compoenntes funcionales, ninguno de clase, sobre estos se trabajará más adelante

// De igual manera dentro de src se creará una carpeta llamada imagenes

// Si nosotros al ya tener todo hasta ahorita ejecutamos la app, nos seguirá saliendo la vista predeterminada de REACT, por lo que para evitar que nos siga saliendo esa vista se realizará:
// se eliminará setupTests.js, reportWebVitals.js, App.test.js debido a que no se utilizarán
// Dentro de index.js se eliminarán ciertas lineas: import webVitals... (al inicio), report webVitals... (al final junto con sus comentarios)

// Dentro de public nosotros podemos decidir qué eliminar, por ejemplo los logos de react o eso.


// -- Hasta aquí se sigue ejecutando la aplicación predeterminada de REACT, ahora lo que se realizará para que esté en blanco y podamos trabajar sobre ella es:

// Dentro de App.js (componente principal de la app), de eliminará todo lo que está dentro del div con la clase App

// Dentro de App.css se eliminará todo el contenido dentro

// Listo, ya tenemos todo vacío; como dato extra es ALTAMENTE RECOMENDADO INSTALAR LA EXTENSIÓN DE DESARROLLADOR DE REACT PARA CHROME, la cuál añadirá 2 secciones en la consola: Components y Profiler

// Una vez acabamos con Testimonio.js nos dirigimos a nuestra App.js para insertar el código de nuestra aplicación

// Una vez ya declarado el index.html, App.js, Testimoinio.js, App.css y Testimonio.js; es momento de sacarle un muy bun provecho a REACT con los props, esto es porque el mayor propósito de REACT sería el utilizar componentes para así evitar la repetición de código, por lo que para cada uno de los testimonios normalmente se tendría que repetir el código para cambiar el contenido a pesar d emanejar la primra estructura, pues gracias a los props esto ya no será necesario ;)