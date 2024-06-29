import React, { useState, useEffect } from "react";
import proveedores_svc from "../../services/proveedores_svc"; // Ajusta la ruta de importación si es necesario
import ConsultarProveedores from "./ConsultarProveedores";
import EditarProveedores from "./EditarProveedores";
import FiltrarProveedores from "./FiltrarProveedores";
import RegistrarProveedores from "./RegistrarProveedores"; // Corregido el nombre del archivo

export default function Proveedores() {
  const [proveedores, setProveedores] = useState([]);
  const [proveedorSeleccionado, setProveedorSeleccionado] = useState(null);

  useEffect(() => {
    fetchProveedores();
  }, []);

  const fetchProveedores = async () => {
    try {
      const data = await proveedores_svc.getAllProveedores();
      setProveedores(data);
    } catch (error) {
      console.error("Error al obtener proveedores:", error);
    }
  };

  const actualizarProveedor = async (id, data) => {
    try {
      await proveedores_svc.actualizarProveedor(id, data);
      fetchProveedores();
      setProveedorSeleccionado(null);
    } catch (error) {
      console.error("Error al actualizar proveedor:", error);
    }
  };

  const eliminarProveedor = async (id) => {
    try {
      await proveedores_svc.eliminarProveedor(id);
      fetchProveedores();
    } catch (error) {
      console.error("Error al eliminar proveedor:", error);
    }
  };

  const filtrarProveedores = async (nombre) => {
    try {
      const data = await proveedores_svc.getAllProveedores();
      const proveedoresFiltrados = data.filter((proveedor) =>
        proveedor.NombreProveedor.toLowerCase().includes(nombre.toLowerCase())
      );
      setProveedores(proveedoresFiltrados);
    } catch (error) {
      console.error("Error al filtrar proveedores:", error);
    }
  };

  const registrarProveedor = async (data) => {
    try {
      await proveedores_svc.crearProveedor(data);
      fetchProveedores();
    } catch (error) {
      console.error("Error al registrar proveedor:", error);
    }
  };

  return (
    <div>
      <h1>Gestión de Proveedores</h1>
      <FiltrarProveedores filtrarProveedores={filtrarProveedores} />
      <ConsultarProveedores
        proveedores={proveedores}
        eliminarProveedor={eliminarProveedor}
        actualizarProveedor={setProveedorSeleccionado}
      />
      {proveedorSeleccionado && (
        <EditarProveedores
          proveedor={proveedorSeleccionado}
          actualizarProveedor={actualizarProveedor}
        />
      )}
      <RegistrarProveedores registrarProveedor={registrarProveedor} />
    </div>
  );
}
