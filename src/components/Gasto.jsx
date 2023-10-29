import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import '../css/Gastos.scss'
import "react-swipeable-list/dist/styles.css"
import "react-swipeable-list/dist/react-swipeable-list.cjs"
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGasto from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'

const Gasto = ({gasto, setEditar, eliminar}) => {
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() =>setEditar(gasto)}>
          Editar
      </SwipeAction>
    </LeadingActions>
  )
  const trailingActions = () => (
    <TrailingActions>
       <SwipeAction onClick={() => eliminar(gasto.id)}>
          Borrar
      </SwipeAction>
    </TrailingActions>
  )
    
  
  const iconos = {
    casa: IconoCasa,
    comida: IconoComida,
    ocio: IconoOcio,
    ahorro: IconoAhorro,
    salud: IconoSalud,
    gastos: IconoGasto
  }
  return (
    <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
        <div className="gastos">
          <div className="gastos-caja">
            <img src={iconos[gasto.tipo]} alt="iconos"/>
            <div className='gastos-caja-nombres'>
              <p className='categoria'>{gasto.tipo}</p>
              <p className='nombre'>{gasto.nombre}</p>
              <p className='cantidad'>{gasto.cantidad}</p>
            </div>
    </div>
    </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
