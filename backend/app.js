import express from "express";
import articulosvc from "./services/articulosvc.js";
import clientescv from "./services/clientescv.js";
import vendedoresvc from "./services/vendedoresvc.js";
import ventasvc from "./services/ventasvc.js";

import { ValidationError } from "sequelize";
import cors from 'cors'
import db from "./data/db.js"
import {Ventas, Articulos, TiposArticulos, Proveedores} from "./model/ventas.js";

const app = express();
app.use(express.json());
app.use(cors())


app.get('/articulos', async (req, res) => {
    const list = await articulosvc.getAll()
    res.json(list)}
)

app.get('/articulos/:id', async(req, res ) => {
    const prod = await articulosvc.getArticuloByID(req.params.id)
    if (prod) {
        res.json(prod)
    }else {
        res.send('no hay tal producto')
    }
})

app.put("/api/articulos", async (req, res)=>{
    try {
        const articulo = await articulosvc.editarArticulo(req.body)
        return res.json(articulo);
    }catch(err){

        console.log(err)
        if (err instanceof ResourceNotFound)
            return res.status(err.status)
            .json({error: err.message})
        if (err instanceof ValidationError){
            return res.status(400)
            .json({error: err.message})
        }
        return res.status(500)
            .json({error: 'Error imprevisto. Intente nuevamente'}) 
    }
})



async function DBInit() {
    await db.sync({ force: true });
    
    await Articulos.bulkCreate([
        { NombreArticulo: 'Plancha', Precio: 100, Stock: 10 , FechaAlta: '2024-05-07 13:00', IdTipo: 1, IdProveedor: 1, Activo: true},
        { NombreArticulo: 'Pelota', Precio: 100, Stock: 10 , FechaAlta: '2024-05-07 14:00', IdTipo: 2, IdProveedor: 1 , Activo: true},
        { NombreArticulo: 'Botella', Precio: 100,Stock: 10 , FechaAlta: '2024-05-07 13:30', IdTipo: 3, IdProveedor: 1 , Activo: true},
        { NombreArticulo: 'Mochila', Precio: 100, Stock: 10 , FechaAlta: '2024-05-07 13:35', IdTipo: 4, IdProveedor: 1 , Activo: true},
        { NombreArticulo: 'Campera', Precio: 100, Stock: 10 , FechaAlta: '2024-05-07 13:40', IdTipo: 1, IdProveedor: 1 , Activo: true},
        { NombreArticulo: 'Buzo', Precio: 100, Stock: 10 , FechaAlta: '2024-05-07 13:45', IdTipo: 3, IdProveedor: 1 , Activo: true},
        { NombreArticulo: 'Lapicera', Precio: 100, Stock: 10 , FechaAlta: '2024-05-07 16:00', IdTipo: 2, IdProveedor: 1 , Activo: true},
        { NombreArticulo: 'Goma', Precio: 100, Stock: 10 , FechaAlta: '2024-05-07 17:00', IdTipo: 4, IdProveedor: 1 , Activo: true},
      
    ])
    await TiposArticulos.bulkCreate([
        { NombreTipo:"Electrodomestico" , Descripcion: ""},
        {NombreTipo:"Juguete" , Descripcion: ""},
        {NombreTipo:"Indumentaria" , Descripcion: ""},
        { NombreTipo:"Utiles Escolares" , Descripcion: ""}
    ])
    await Proveedores.bulkCreate([
        {NombreProveedor:"Arcor" },
        {NombreProveedor:"Maped" },
        {NombreProveedor:"Cloumbia"},
      
        {NombreProveedor:"Amazon"}
    ]);
}
    DBInit().then(() => {
    app.listen(3000, async() => console.log('Servidor escuchando peticiones en http://localhost:3000'));
});
