import axios from "axios";

const API_URL = "http://localhost:3001"; // Reemplaza con la URL de tu backend

async function getAllProveedores() {
  let newUrl = `${API_URL}/proveedores`;
  return await axios.get(newUrl).then((response) => {
    return response.data;
  });
}

async function getProveedorById(id) {
  let newUrl = `${API_URL}/proveedores/${id}`;
  return await axios.get(newUrl).then((response) => {
    return response.data;
  });
}

async function crearProveedor(data) {
  let newUrl = `${API_URL}/proveedores`;
  return await axios.post(newUrl, data).then((response) => {
    return response.data;
  });
}

async function actualizarProveedor(id, data) {
  let newUrl = `${API_URL}/proveedores/${id}`;
  return await axios.put(newUrl, data).then((response) => {
    return response.data;
  });
}

async function eliminarProveedor(id) {
  let newUrl = `${API_URL}/proveedores/${id}`;
  return await axios.delete(newUrl).then((response) => {
    return response.data;
  });
}

export default {
  getAllProveedores,
  getProveedorById,
  crearProveedor,
  actualizarProveedor,
  eliminarProveedor,
};
