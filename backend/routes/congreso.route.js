import express from "express";
const router = express.Router(); 
import db from "../base-orm/sequelize-init.js"
import {Op, ValidationError} from "sequelize"



router.get('/congresos', async(req,res) =>{
    try{
        const congresos = await db.Congresos.findAll({})
       if(congresos == null){
        res.status(404).send({ mensaje: "NO ENCONTRADO"})
       }
       else{
        res.json(congresos)
       }
    } catch(error) { 
        console.log(error);
        res.status(500).send({mensaje: "Error interno, intente nuevamente"})
    }
})

export default router


