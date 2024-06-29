import { TiposArticulos } from '../model/ventas.js'

const getAll = async () => {
  return await TiposArticulos.findAll();
};

const insertarTipoArticulo = async (tipoArticuloCmd) => {
  const resultado = await TiposArticulos.create({
    NombreTipo: tipoArticuloCmd.NombreTipo,
    Descripcion: tipoArticuloCmd.Descripcion,
  });

  return {
    IdTipo: resultado.dataValues.IdTipo,
    NombreTipo: resultado.dataValues.NombreTipo,
    Descripcion: resultado.dataValues.Descripcion,
  };
};

const editarTipoArticulo = async (tipoArticuloCmd) => {
  const tipoArticulo = await TiposArticulos.findOne({
    where: { IdTipo: tipoArticuloCmd.IdTipo },
  });

  if (!tipoArticulo) {
    throw new Error("Tipo de Artículo no encontrado");
  }

  const updatedTipoArticulo = await TiposArticulos.update(
    {
      NombreTipo: tipoArticuloCmd.NombreTipo,
      Descripcion: tipoArticuloCmd.Descripcion,
    },
    {
      where: { IdTipo: tipoArticuloCmd.IdTipo },
    }
  );

  return { IdTipo: tipoArticuloCmd.IdTipo };
};

const eliminarTipoArticulo = async (id) => {
  const tipoArticulo = await TiposArticulos.findOne({
    where: { IdTipo: id },
  });

  if (!tipoArticulo) {
    throw new Error("Tipo de Artículo no encontrado");
  }

  const deletedTipoArticulo = await TiposArticulos.destroy({
    where: { IdTipo: id },
  });

  return { deletedTipoArticulo };
};

const getTipoArticuloByID = async (idTipo) => {
  const tipoArticulo = await TiposArticulos.findByPk(idTipo);

  if (tipoArticulo) {
    return {
      IdTipo: tipoArticulo.IdTipo,
      NombreTipo: tipoArticulo.NombreTipo,
      Descripcion: tipoArticulo.Descripcion,
    };
  } else {
    throw new Error("Tipo de Artículo no encontrado");
  }
};

export default {
  getAll,
  insertarTipoArticulo,
  editarTipoArticulo,
  eliminarTipoArticulo,
  getTipoArticuloByID,
};
