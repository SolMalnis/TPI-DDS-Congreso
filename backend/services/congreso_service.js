import sequelize from "../base-orm/sequelize-init.js"
import { Op } from "sequelize"

const getAll = async () =>{
    try{
        const congreso = await sequelize.models.Congresos.findAll();
        return congreso;
    }
    catch(error){
        console.log(error);
        return {error: error.message}
    }
}
export default getAll;
