import React from 'react'
import Gasto from './Gasto'
import '../css/ListadoGastos.scss'

const ListadoGastos = ({gastos, setEditar, eliminar}) => {
  return (
    <div className='listado'>
        <h2>Listado de Gastos</h2>
        {gastos.length  ? (
         <p>Gastos</p>
        ) : (
        <p>No hay gastos</p>
        )
    
        }
          {gastos.map( (e) => (
            <Gasto 
              key={e.id}
              gasto={e}
              setEditar={setEditar}
              eliminar={eliminar}
            />

           ))} 
    </div>
  )
}

export default ListadoGastos