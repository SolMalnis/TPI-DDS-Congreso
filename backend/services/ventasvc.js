
import {Ventas,Clientes, Vendedores} from '../model/ventas.js'

import {Op} from "sequelize"


const getVentas = async (filters) => {
    const whereQuery = {}
    if(filters){
        if(filters.IdCliente){
            whereQuery.IdCliente = filters.IdCliente
        }
    }

    const resultado = await Ventas.findAll({
        where: whereQuery,
        attributes: [
            'IdVenta',
            'IdCliente',
            'IdVendedor',
            'Fecha',
            'Total',
        ],
    })
    return resultado.map(p => {
        return {
            IdVenta: p.dataValues.IdVenta,
            IdCliente: p.dataValues.IdCliente,
            IdVendedor: p.dataValues.IdVendedor,
            Fecha: p.dataValues.Fecha,
            Total: p.dataValues.Total, 
        }
    })
}
async function getVentaByID (idVenta){
    let productoCompleto = ''
    const venta = await Ventas.findOne({
        where:{
            IdVenta : idVenta
        },
        include: [
            { model: Clientes, as: 'Clientes',},
            { model: Vendedores, as: 'Vendedores'}
              ]
    })
    if (venta){
        productoCompleto = {
            IdVenta: venta.IdVenta,
            Cliente: venta.Cliente.NombreCliente,
            Vendedor:venta.Vendedores.NombreVendedor ,
            Fecha: venta.Fecha,
            Total: venta.Total,   
        }
        return (productoCompleto)
    }else {
        return ("no hay tal venta")
    }
}


const insertarVentas = async (venta) => {
    console.log(venta)
    const resultado = await Articulos.create({
       
        IdCliente: venta.IdVendedor,
        IdVendedor:venta.IdVendedor ,
        Fecha: venta.Fecha,
        Total: venta.Total,
        
    })
    return {
        IdArticulo: resultado.dataValues.IdVenta
    };
}

export default {getVentas, getVentaByID, insertarVentas}