import express from "express";
import getAll from "../services/congreso_service.js"

const router = express.Router(); 

router.get('/congresos', async(req,res) =>{
    try{
        const congresos = await getAll()
        res.json(congresos)
    } catch(error) { 
        console.log(error);
        res.status(500).send({error: "Error interno, intente nuevamente"})
    }
})

export default router


