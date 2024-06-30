import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import 'dotenv/config'
import CongresoModel from "./congreso.js";
import EvaluacionModel from "./evaluacion.js"
import InscripcionModel from "./inscripcion.js";
import OradorModel from "./orador.js";
import ParticipanteModel from "./participante.js";
import SalaModel from "./sala.js"
import TipoCongresoModel from "./tipoCongreso.js";
import PatrocinadorModel from "./patrocinador.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../data/congresos.sqlite'
})


const Congresos = sequelize.define(
    "Congresos",
    CongresoModel.CongresoAttributes,
    CongresoModel.CongresoOptions
    
)

const Evaluaciones =sequelize.define(
    'Evaluaciones',
    EvaluacionModel.EvaluacionAttributes,
    EvaluacionModel.EvaluacionOptions
)

const Inscripciones = sequelize.define(
    'Inscripciones',
    InscripcionModel.InscripcionAttributes,
    InscripcionModel.InscripcionOptions
)

const Oradores = sequelize.define(
    'Oradores',
    OradorModel.OradorAttributes,
    OradorModel.OradorOptions
)

const Participantes = sequelize.define(
    'Participantes',
    ParticipanteModel.ParticipanteAttributes,
    ParticipanteModel. ParticipanteOptions
)

const Patrocinadores = sequelize.define(
    'Patrocinadores',
    PatrocinadorModel.PatrocinadorAttributes,
    PatrocinadorModel. PatrocinadorOptions
)

const Salas = sequelize.define(
    'Salas',
    SalaModel.SalaAttributes,
    SalaModel. SalaOptions
)

const TiposCongreso = sequelize.define(
    'TiposCongreso',
    TipoCongresoModel.TipoCongresoAttributes,
    TipoCongresoModel. TipoCongresoOptions
)

sequelize.models.Oradores.belongsTo(sequelize.models.Congresos, {
    foreignKey: 'IdOrador'
})

sequelize.models.Patrocinadores.belongsTo(sequelize.models.Congresos, {
    foreignKey: 'IdPatrocinador'
})

sequelize.models.Salas.belongsTo(sequelize.models.Congresos, {
    foreignKey: 'IdSala'
})

sequelize.models.TiposCongreso.belongsTo(sequelize.models.Congresos, {
    foreignKey: 'IdTipoCongreso'
})

/*
sequelize.models.Evaluaciones.hasOne(sequelize.models.Participantes, {
    foreignKey: 'IdParticipante'
})
*/
sequelize.models.Participantes.belongsTo(sequelize.models.Evaluaciones, {
    foreignKey: 'IdParticpante'
})

/* 
sequelize.models.Evaluaciones.hasOne(sequelize.models.Congresos, {
    foreignKey: 'IdCongreso'
})
*/

sequelize.models.Congresos.belongsTo(sequelize.models.Evaluaciones, {
    foreignKey: 'IdCongreso'
})

/*
sequelize.models.Inscripciones.hasOne(sequelize.models.Congresos, {
    foreignKey: 'IdCongreso'
})
*/
sequelize.models.Congresos.belongsTo(sequelize.models.Inscripciones, {
    foreignKey: 'IdCongreso'
})

/*
sequelize.models.Inscripciones.hasOne(sequelize.models.Participantes, {
    foreignKey: 'IdParticipante'
})
*/
sequelize.models.Participantes.belongsTo(sequelize.models.Inscripciones, {
    foreignKey: 'IdParticipante'
})


try {
    await sequelize.sync()
}
catch (err){
    console.log({msg: err.message})
}

export default {sequelize, Congresos, Inscripciones,Oradores,Participantes,Salas,TiposCongreso,Evaluaciones,Patrocinadores}