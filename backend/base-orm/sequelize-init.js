import Sequelize from "sequelize";
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


sequelize.define(
    'Congresos',
    CongresoModel.CongresoAttributes,
    CongresoModel.CongresoOptions
)

sequelize.define(
    'Evaluaciones',
    EvaluacionModel.EvaluacionAttributes,
    EvaluacionModel.EvaluacionOptions
)

sequelize.define(
    'Inscripciones',
    InscripcionModel.InscripcionAttributes,
    InscripcionModel.InscripcionOptions
)

sequelize.define(
    'Oradores',
    OradorModel.OradorAttributes,
    OradorModel.OradorOptions
)

sequelize.define(
    'Participantes',
    ParticipanteModel.ParticipanteAttributes,
    ParticipanteModel. ParticipanteOptions
)

sequelize.define(
    'Patrocinadores',
    PatrocinadorModel.PatrocinadorAttributes,
    PatrocinadorModel. PatrocinadorOptions
)

sequelize.define(
    'Salas',
    SalaModel.SalaAttributes,
    SalaModel. SalaOptions
)

sequelize.define(
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

export default sequelize