import { useState, useEffect } from 'react'
import Header from './components/Header';
import './css/App.scss'
import IconoNuevo from './img/nuevo-gasto.svg'
import Modal from './components/Modal';
import { generarId } from './id';
import ListadoGastos from './components/ListadoGastos';

function App() {

  const [gastos, setGastos] = useState([]);
  const [presupuesto, setPresupuesto] = useState(0);
  const [valid, setValid] = useState(false);
  const [nombre, setNombre] = useState("");
  const [modal, setModal] = useState(false);
  const [animar, setAnimar] = useState(false);

  const [editar, setEditar] = useState({});

  const eliminar = (id) => {
    const actualizado = gastos.filter((gasto) => gasto.id !== id);
    setGastos(actualizado);
  }

  useEffect (() => {
    if (Object.keys(editar).length > 0) {
      setModal(true)
      setInterval(() => {
      setAnimar(true);
   }, 1000);
    }
  }, [editar])


  const guardarGasto = (gasto) => {
    if(gasto.id) {
      const gastosActualizados = gastos.map(gastoss => gastoss.id === gasto.id ? gasto : gastoss)
      setGastos(gastosActualizados)
    } else {
      gasto.id = generarId();
      setGastos([...gastos, gasto])
    }

   
  }

   const handleModal = () => {
    
   setModal(true)
   setEditar({})
   setInterval(() => {
    setAnimar(true);
   }, 1000);
  }

    return (
      <>
        <div className={modal ? 'fijo': ''}>
          <Header
            gastos={gastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            valid={valid}
            setValid={setValid}
            nombre={nombre}
            setNombre={setNombre}
            
          />
          {valid && (
            <>
            <main>
              <ListadoGastos 
                gastos={gastos}
                setEditar={setEditar}
                eliminar={eliminar}
              />
            </main>
            
            <div className='gasto'>
              <img src={IconoNuevo} onClick={handleModal}/>
            </div>
            </>
          )}
          {modal && (
            <Modal
              setModal={setModal}
              animar={animar}
              setAnimar={setAnimar}
              guardarGasto={guardarGasto}
              editar={editar}
              setEditar={setEditar}
            />
          )}
        </div>
      </>
    );
}

export default App
