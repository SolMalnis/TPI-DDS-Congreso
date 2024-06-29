import { Proveedores} from '../model/ventas.js'
const getAll = async () => {
  return await Proveedores.findAll();
};

const insertarProveedor = async (proveedorCmd) => {
  const resultado = await Proveedores.create({
    NombreProveedor: proveedorCmd.NombreProveedor,
  });

  return {
    IdProveedor: resultado.dataValues.IdProveedor,
    NombreProveedor: resultado.dataValues.NombreProveedor,
  };
};

const editarProveedor = async (proveedorCmd) => {
  const proveedor = await Proveedores.findOne({
    where: { IdProveedor: proveedorCmd.IdProveedor },
  });

  if (!proveedor) {
    throw new Error("Proveedor no encontrado");
  }

  const updatedProveedor = await Proveedores.update(
    {
      NombreProveedor: proveedorCmd.NombreProveedor,
    },
    {
      where: { IdProveedor: proveedorCmd.IdProveedor },
    }
  );

  return { IdProveedor: proveedorCmd.IdProveedor };
};

const eliminarProveedor = async (id) => {
  const proveedor = await Proveedores.findOne({
    where: { IdProveedor: id },
  });

  if (!proveedor) {
    throw new Error("Proveedor no encontrado");
  }

  const deletedProveedor = await Proveedores.destroy({
    where: { IdProveedor: id },
  });

  return { deletedProveedor };
};

const getProveedorByID = async (idProveedor) => {
  const proveedor = await Proveedores.findByPk(idProveedor);

  if (proveedor) {
    return {
      IdProveedor: proveedor.IdProveedor,
      NombreProveedor: proveedor.NombreProveedor,
    };
  } else {
    throw new Error("Proveedor no encontrado");
  }
};

export default {
  getAll,
  insertarProveedor,
  editarProveedor,
  eliminarProveedor,
  getProveedorByID,
};
