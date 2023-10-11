import React, {useEffect} from "react";
import  '../styles/Tarea.css';
import { AiOutlineCloseSquare } from "react-icons/ai";


function Tarea({id, texto, complet, completTarea, deleteTarea}) {
   
    return (
        <div className={complet ? "tarea-container complet" : "tarea-container"}>
            <div
                className="tarea-text"
                onClick={() => completTarea(id)}>
                {texto}
            </div>
            <div className="tarea-icon-container" onClick={() => deleteTarea(id)}>
                <AiOutlineCloseSquare className="tarea-icon" />
            </div>
        </div>
    );
}

export default Tarea;