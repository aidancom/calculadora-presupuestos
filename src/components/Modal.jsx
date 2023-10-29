import React, { useEffect, useState } from 'react'
import '../css/Modal.scss'
import IconoNuevo from '../img/cerrar.svg'
import Error from './Error';

const Modal = ({setModal, animar, setAnimar, guardarGasto, editar}) => {
	const [nombre, setGastos] = useState('')
	const [cantidad, setCantidad] = useState(0)
	const [tipo, setTipo] = useState('casa')
    const [validar, setValidar] = useState(false)
    const cerrarModal = () => {
        setModal(false)
        setTimeout(() => {
            setAnimar(false)
        }, 1000)
    }
    const handleNuevo = (e) => {
        e.preventDefault()
        if ([nombre, cantidad, tipo].includes('')) {
            setModal(true)
            setValidar(true)
        } else {
            setModal(false)
            setValidar(false)
            guardarGasto({nombre, cantidad, tipo})
        }
    }
  return (
    <div className='modal'>
        <img src={IconoNuevo} onClick={cerrarModal}></img>
        <div className='modal-formulario'>
        {validar && <Error>No es valido</Error>}
        <form className={`${animar? "animar": 'desanimar'}`} onSubmit={handleNuevo}>
            <label>Nombre Gasto</label>
            <input id="gastos" type="text" onChange={(e) => setGastos(e.target.value)} value={nombre} placeholder='Añade el nuevo gasto'></input>
            <label>Cantidad</label>
            <input id="cantidad" type="number" onChange={(e) => setCantidad(Number(e.target.value))} value={cantidad} placeholder='Añade la cantidad'></input>
            <label>Tipo de gasto</label>
            <select onChange={(e) => setTipo(e.target.value)} value={tipo}>
                <option value="casa">Casa</option>
                <option value="comida">Comida</option>
                <option value="ocio">Ocio</option>
                <option value="ahorro">Ahorro</option>
                <option value="salud">Salud</option>
                <option value="gastos">Otros gastos</option>
            </select>
            <input type="submit" value="Añadir"></input>
        </form>
        </div>
   
    </div>
  )
}

export default Modal
