// Recordemos que el useState es un HOOK
import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css'

const ListaDeTareas = ()=> {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea=> {
    // console.log("Tarea Agregada");
    console.log(tarea);
    // RECORDEMOS QUE TRIM SE ENCARGA DE QUITAR LOS ESPACIOS
    if (tarea.texto.trim()) {
      tarea.text = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id=> {
    const tareasActualizadas = tareas.filter(tarea=> tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id=> {
    const tareasActualizadas = tareas.map(tarea=> {
      if(tarea.id === id) {
        // EL OPERADOR ! ES COMO APLICAR UN NOT SOBRE tarea.completada
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  // Cuando se presentan etiquetas vacías, es decir que no tienen un div de pr medio o algo, se le llaman fragmentos, esto ocurre para definir al contenedor principal, pero que no queremos que la estructura se vea afectada, esto es porque como ya se dijo, todo tiene que estar construido sobre un contenedor principal, nosotros no podemos tener "2 contenedores principales", es por esto que se crean los fragmentos
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          // map es un metodo que toma cada tarea, pasa cada una como argumento y realiza lo que nosotros especifiquemos con dicha tarea
          // KEY ES UNA FORMA DE REACT PARA IDENTIFICAR UN ELEMENTO DE LA LISTA Y DEBE SER ÚNICO
          // SE PASAN EL KEY Y EL ID POR SEPARADO, YA QUE EL ID NO SE PASA COMO UN PROP, ENTONCES NOSOTROS LO ESTAMOS ESPECIFICANDO ABAJO
          tareas.map((tarea)=> 
          <Tarea 
            key={tarea.id}
            id={tarea.id}
            texto = { tarea.texto }
            completada = { tarea.completada }
            completarTarea = { completarTarea }
            eliminarTarea = { eliminarTarea }
          />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;