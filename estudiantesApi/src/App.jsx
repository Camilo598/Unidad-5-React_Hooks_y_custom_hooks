import { useState } from 'react'
import './App.css'
import TablaEstudiantes from '../components/TablaEstudiantes'
import EstudianteProvider from '../components/EstudianteProvider'
import EstudianteLista from '../components/EstudianteLista'
import EstudianteLinkedin from '../components/EstudianteLinkedin'

function App() {

  return (
    <>
      <div>
        {/*<TablaEstudiantes/>*/}
        <EstudianteProvider>
          <EstudianteLista/>
        </EstudianteProvider>
      </div>
    </>
  )
}

export default App
