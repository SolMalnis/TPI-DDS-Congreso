import { DataTypes } from 'sequelize'
import { Vendedores, Ciudades} from '../model/ventas.js'

async function getAll(){
    return await Vendedores.findAll()
}


const insertarVendedor = async (vendedor) => {
    console.log(vendedor)
    const resultado = await Vendedores.create({
        Legajo : vendedor.Legajo,
        NombreVendedor: vendedor.NombreVendedor,
        ApellidoVendedor : vendedor.ApellidoVendedor,
        FechaAlta: vendedor.FechaAlta
    })
    return {
        IdVendedor: resultado.dataValues.IdVendedor,
        Legajo: resultado.dataValues.Legajo,

    };
}

const darBajaVendedor = async (id) => {
    const vendedor = await Vendedores.findOne({
        where: { IdVendedor: id, FechaBaja: null},
    });
    if (!vendedor) {
        throw new ResourceNotFound("Vendedor no encontrado");
    }

    const deletedVendedor = await Articulos.update(
        {
            FechaBaja: DataTypes.NOW
        },
        {
            where: { IdVendedor: id}
        });
    
    return {deletedVendedor };
}

async function get_one (id){
    const vendedor = await Vendedores.findOne({
        where:{
            IdVendedor : id 
        }
    })
    if (vendedor){
        
        return vendedor
    }else {
        return ("no hay tal vendedor")
    }
}


export default {getAll, get_one, insertarVendedor, darBajaVendedor}