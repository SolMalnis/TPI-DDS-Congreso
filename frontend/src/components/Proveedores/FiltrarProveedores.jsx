import React from "react";

export default function FiltrarProveedores(props) {
  const handleFiltroChange = (e) => {
    props.filtrarProveedores(e.target.value);
  };

  return (
    <div>
      <h2>Filtrar Proveedores por Nombre</h2>
      <input
        type="text"
        placeholder="Ingrese nombre del proveedor"
        onChange={handleFiltroChange}
      />
    </div>
  );
}
