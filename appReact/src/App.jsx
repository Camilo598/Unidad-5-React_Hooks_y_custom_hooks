import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Tarjeta } from './components/Tarjeta'
import TarjetaInv from './components/TarjetaInv'
import Button from './components/Button'
import Contador from './components/Contador'
import CambioTema from './components/CambioTema'

function App() {
  const buttonPropiedades = {
    onClick : () => console.log('Ingresando al boton'),
    label: 'Mostrar en consola',
    disabled: false
  }

  const eventoClick = () => console.log('Ingresando al evento Click');
  const label = 'Evento click';
  const disabled = false;

  return (
    <div>
      <Contador />
      <CambioTema/>
    </div>
  )
}

export default App
