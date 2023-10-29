import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import '../css/Header.scss'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, valid, setValid, nombre, setNombre, gastos}) => {
  return (
    <header>
      <h1>Control de gastos</h1>
      {valid ? (
        <ControlPresupuesto
        presupuesto={presupuesto}
        nombre={nombre}
        gastos={gastos}
        />
      ):(
        <NuevoPresupuesto 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valid={valid}
        setValid={setValid}
        nombre={nombre}
        setNombre={setNombre}
      />
      )}
    
    </header>
  )
}

export default Header
