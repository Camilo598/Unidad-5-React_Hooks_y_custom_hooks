import { useState } from 'react'
import './App.css'
import TareaForm from '../components/TareaForm'
import TareaLista from '../components/TareaLista';

function App() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  const quitarTarea = (tarea) => {
    setTareas(tareas.filter((t) => t !== tarea));
  };

  const actualizarTarea = (tareaAnterior, tareaEditada) => {
    setTareas(
      tareas.map((tarea) => (tarea === tareaAnterior ? tareaEditada : tarea))
    )
  }

  return (
    <div className='container'>
      <h1>Lista de tareas</h1>
      <TareaForm agregarTarea={agregarTarea}/>
      <TareaLista tareas={tareas} quitarTarea={quitarTarea} actualizarTarea={actualizarTarea}/>
    </div>
  )
}

export default App
