import UserContext from "./context/UserContext"
import MoreInfo from "./components/Moreinfo"
import './App.css'
import LisTareas from './components/ListTareas';
import React,{useEffect, useState, useId} from 'react';
function App() {

  const id = useId()

  const [counter, setCounter] = useState(0)
  
  const aumentar = () => {
    setCounter(counter + 1);
  }

  useEffect(() => {
    console.log("Total tareas agregadas: "+ counter +" "+id)
  }, [aumentar]);


  const userData = {
    name: "Andrés - Christopher",
};

  return (
    <>
      <div className='tareas'>
        <div>
          <h1 className='titulo'>Agenda de Tareas </h1>
          <div className='lista_principal'>
            <UserContext.Provider value={userData}>            
              <div className="dueños">
                <MoreInfo />
              </div>  
            </UserContext.Provider>
            <h2>Mis Tareas</h2>
            <div className="container-counter">
              <spam className= "counter" >{counter}</spam>
              <button className='button-agregar' onClick={aumentar}>Tareas agregadas</button>
            </div>
            <LisTareas />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
