import React, { useEffect } from 'react'
import Error from './Error';
import { useState } from 'react';

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setValid, nombre, setNombre}) => {
    const [validacion, setValidacion] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!presupuesto || presupuesto < 0) {
            setValidacion(true)
        } else {
            setValidacion(false)
            setValid(true)
        }
       
    }
  return (
    <div className="presupuesto">
        <form onSubmit={handleSubmit} className="presupuesto-formulario">
            {validacion && <Error>No es valido</Error>}
            <div className="presupuesto-formulario-campo">
                <label>Define tu presupesto</label>
                <input type="text" onChange={(e) => setNombre(e.target.value)} className="presupuesto-formulario-campo-input" value={nombre} placeholder='Pon tu nombre'></input>
                <input type="text" onChange={(e) => setPresupuesto(Number(e.target.value))} className="presupuesto-formulario-campo-input" value={presupuesto}></input>
            </div>
            <input className="presupuesto-formulario-enviar" type="submit" value="Añadir"></input>
        </form>
    </div>
  )
}

export default NuevoPresupuesto
