import React from "react";
import Gasto from "./Gasto";
import "../css/ListadoGastos.scss";

const ListadoGastos = ({ gastos, setEditar, eliminar }) => {
  return (
    <div className="listado">
      <h2>Listado de Gastos</h2>
      {gastos.length ? <p>Gastos</p> : <p>No hay gastos</p>}
      {gastos.map((gasto) => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setEditar={setEditar}
          eliminar={eliminar}
        />
      ))}
    </div>
  );
};

export default ListadoGastos;
