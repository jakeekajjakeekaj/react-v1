// Para crear nuetsra primera app en REACT lo que se tiene que hacer es:
// Abrir la terminal y escribir npx create-react-app nombrexd
// En nombrexd sería el nombre del proyecto, por ejemplo mi-app o algo así

// Si sale una advertencia respecto a tar, de que está desactualizado, escribir: npm install tar@7 -g que sería la útlima versión

// Una vez finalizado, nos arroja el siguiente mensaje:
/* 
Inside that directory, you can run several commands:      

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.     

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd my-app
  npm start

Happy hacking!
*/

// Esto es importante porque indica las siguientes cosas que se pueden hacer

// Si sale una advertencia de que One of your dependencies, babel-preset-react-app, is importing the "@babel/plugin-proposal-private-property-in-object" package without declaring it in its dependencies. This is currently working because "@babel/plugin-proposal-private-property-in-object" is already in your node_modules folder for unrelated reasons, but it may break at any time.
// Solo ejecuta lo siguiente: npm install --save-dev @babel/plugin-transform-private-property-in-object

// Una vez ya creado todo, podemos ver la carpeta de node_modules que esta ya la conocemos por el curso de Node
// Después vemos una carpeta de public, dentro de esta nos podemos encontrar al favicon, un index.html

// Aparte podemos encontrar a la carpeta src, dentro de esta carpeta irán alojados todos los archivos fuentes de la aplicación, básicamente todos los estilos o funcionalidad de la propia página, dentro de este se encuentra:
// App.css que son los estilos de la app
// App.js que aquí dentro se aloja el JSX, y es esa funcionalidad de JS con HTML
// App.test.js permite escribir distintos tests y se pueden ejecutar para probar componentes
// index.css Da el estilo a la estructura principal de la aplicación, es decir que el App.css tiene importado a index.css