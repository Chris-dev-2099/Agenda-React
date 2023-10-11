import React, {useState} from 'react';
import TareaForm from './TareaForm';
import Tarea from './tarea';
import "../styles/ListTareas.css";


    
function LisTareas() {
    
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim()

            const tareasActual = [tarea, ...tareas];
            setTareas(tareasActual);
            
        }
    }

    const deleteTarea = id => {
        const tareasActual =tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActual);
    }

    const completTarea = id => {
        const tareasActual = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.complet = !tarea.complet;
            }
            return tarea;
        })
        setTareas(tareasActual);
    }

    return (
        <>
            <TareaForm onSubmit={agregarTarea} />
            <div className='tareas-list-container'>
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}  
                            complet={tarea.complet}
                            deleteTarea={deleteTarea}
                            completTarea={completTarea}        
                        />     
                    )
                }
            </div>
        </>
    );
}

export default LisTareas