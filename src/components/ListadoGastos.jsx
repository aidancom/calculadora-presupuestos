import React, { useEffect, useState } from 'react'
import Gasto from './Gasto'
import '../css/ListadoGastos.scss'

const ListadoGastos = ({gastos, setEditar, eliminar}) => {
  const [gastosFiltrados, setgastosFiltrados] = useState("");
  const [filtro, setFiltro] = useState("");
  useEffect(() => {
    console.log(gastos)
    const filtrar = gastos.filter(gasto => gasto.tipo === filtro)
    setgastosFiltrados(filtrar)
    console.log(gastosFiltrados)
  }, [filtro, gastos])
  return (
    <div className='listado'>
      <select value={filtro} onChange={e => setFiltro(e.target.value)}>
            <option value="Casa">Casa</option>
            <option value="Comida">Comida</option>
            <option value="Ocio">Ocio</option>
            <option value="Ahorro">Ahorro</option>
            <option value="Salud">Salud</option>
            <option value="Gastos">Otros gastos</option>
      </select>
        <h2>Listado de Gastos</h2>
        {gastos.length  ? (
         <p>Gastos</p>
        ) : (
        <p>No hay gastos</p>
        )
    
        }
        {filtro ? (
          gastosFiltrados.map( (gasto) => (
          <Gasto 
            key={gasto.id}
            gasto={gasto}
            setEditar={setEditar}
            eliminar={eliminar}
          />

         ))
        ): (
          gastos.map( (gasto) => (
            <Gasto 
              key={gasto.id}
              gasto={gasto}
              setEditar={setEditar}
              eliminar={eliminar}
            />

           ))
        )}
    </div>
  )
}

export default ListadoGastos
