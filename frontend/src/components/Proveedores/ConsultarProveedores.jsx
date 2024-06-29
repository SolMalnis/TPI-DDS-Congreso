import React from "react";

export default function ConsultaProveedores(props) {
  function handleEliminar(id) {
    props.eliminarProveedor(id);
  }

  function handleActualizar(id) {
    props.actualizarProveedor(id);
  }

  const tbody = props.proveedores.map((proveedor, index) => (
    <tr key={index + 1}>
      <td>{proveedor.IdProveedor}</td>
      <td>{proveedor.NombreProveedor}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => handleActualizar(proveedor.IdProveedor)}
        >
          Actualizar
        </button>
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleEliminar(proveedor.IdProveedor)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2>Listado de Proveedores</h2>
      <table className="table table-striped text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Actualizar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>{tbody}</tbody>
      </table>
    </>
  );
}
