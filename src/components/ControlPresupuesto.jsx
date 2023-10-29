import {useState, useEffect} from 'react'
import '../css/Control.scss'

const ControlPresupuesto = ({presupuesto, nombre, gastos}) => {
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(()  => {
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
        setGastado(totalGastado)
        setDisponible(totalDisponible);
        console.log(gastado)
    }, [gastos])
    
    const formatearDinero = (e) => {
        return e.toLocaleString('en-EN', {
            currency: 'EUR',
            style: 'currency',
            
        });
    }
  return (
    <div className='control'>
        <div className='control-grafica'>
            <p>Grafica</p>
        </div>
        <div className='control-presupuesto'>
            <p>Presupuesto de  {nombre}</p>
            <span className='control-presupuesto-cantidad'>Tu cantidad: <span className='numero'>{formatearDinero(presupuesto)}</span></span>
            <span className='control-presupuesto-cantidad'>Disponible: <span className='numero'>{formatearDinero(disponible)}</span></span>
            <span className='control-presupuesto-cantidad'>Gastado: <span className='numero'>{formatearDinero(gastado)}</span></span>
        </div>
    </div>
  )
}

export default ControlPresupuesto
