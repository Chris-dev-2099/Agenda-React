import React, {useState, useRef} from "react";
import '../styles/TareaForm.css';
import {v4 as uuidv4} from 'uuid'

function TareaForm(props) {

    const [input, setinput] = useState('');

    const manejarCambio = e => {
        setinput(e.target.value);
    }

    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNew = {
            id: uuidv4(),
            texto: input,
            complet : false
        };

        props.onSubmit(tareaNew);
    }

    const confirmacion = useRef(null)
    const alerta = () => {
        alert("Se agrego la siguiente tarea con exito: "+confirmacion.current.value);
    }

    return (
        <form className="tarea-form"
            onSubmit={manejarEnvio}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Tarea a escribir"
                name="texto"
                ref={confirmacion}
                onChange={manejarCambio}
            />
            <button className="tarea-button" >
                <button onClick={alerta} className="button-alerta">Agregar Tarea</button>
            </button>
        </form>
    )
}
export default TareaForm