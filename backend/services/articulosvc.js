
import { Articulos, TiposArticulos, Proveedores} from '../model/ventas.js'

import {Op} from "sequelize"


async function getAll(){
    return await Articulos.findAll()
}

const insertarArticulo = async (ArticuloCmd) => {
    console.log(ArticuloCmd)
    const resultado = await Articulos.create({
        NombreArticulo: ArticuloCmd.NombreArticulo,
        Precio : ArticuloCmd.Precio,
        Stock : ArticuloCmd.Stock,
        FechaAlta : ArticuloCmd.FechaAlta,
        Activo: true,
        IdTipo: ArticuloCmd.IdTipo,
        IdProveedor : ArticuloCmd.IdProveedor
        
    })
    return {
        IdArticulo: resultado.dataValues.IdArticulo,
        NombreArticulo: resultado.dataValues.NombreArticulo,

    };
}

const editarArticulo = async (articuloCmd) => {
    const articulo= await sequelize.models.Peliculas.findOne({
        where: { IdArticulo: articuloCmd.IdArticulo, Activo: true },
    });
    if (!articulo) {
        throw new ResourceNotFound("Articulo no encntrado");
    }

    const updatedArticulo = await Articulos.update(
        {
            NombreArticulo: articuloCmd.NombreArticulo,
            Precio : articuloCmd.Precio,
            Stock : articuloCmd.Stock,
            IdTipo: articuloCmd.IdTipo,
        IdProveedor : articuloCmd.IdProveedor
        },
        {
            where: { IdArticulo: articuloCmd.IdArticulo }
        });
    console.log(updatedArticulo)
    return { Articulo: articuloCmd.IdArticulo};

}
const eliminarArticulo = async (id) => {
    const articulo = await Articulos.findOne({
        where: { IdArticulo: id, Activo: true},
    });
    if (!articulo) {
        throw new ResourceNotFound("Articulo no encontrado");
    }

    const deletedArticulo = await Articulos.update(
        {
            Activo : false
        },
        {
            where: { IdArticulo: id}
        });
    
    return {deletedArticulo };
}

async function getArticuloByID (idArt){
    let productoCompleto = ''
    const articulo = await Articulos.findOne({
        where:{
            IdArticulo : idArt
        },
        include: [
            { model: Proveedores, as: 'Proveedor',},
            { model: TiposArticulos, as: 'TiposArticulo'}]
              
    })
    if (articulo){
        productoCompleto = {
            IdArticulo : articulo.IdArticulo,
            NombreArticulo: articulo.NombreArticulo,
            Precio : articulo.Precio,
            Stock : articulo.Stock,
            FechaAlta: articulo.FechaAlta,
            Activo: articulo.Activo,
            Tipo: articulo.TiposArticulo.NombreTipo,
            Proveedor : articulo.Proveedor.NombreProveedor
        }
        return (productoCompleto)
    }else {
        return ("no hay tal articulo")
    }
}

export default {getAll, insertarArticulo, editarArticulo, eliminarArticulo, getArticuloByID}
