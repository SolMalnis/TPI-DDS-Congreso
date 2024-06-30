import Sequelize from "sequelize";
import CongresoModel from "./congreso";
import EvaluacionModel from "./evaluacion"
import InscripcionModel from "./inscripcion";
import OradorModel from "./orador";
import ParticipanteModel from "./participante";
import SalaModel from "./sala"
import TipoCongresoModel from "./tipoCongreso";

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

sequelize.models.Evalaciones.hasOne(sequelize.models.Participantes, {
    foreignKey: 'IdParticipante'
})

sequelize.models.Evalaciones.hasOne(sequelize.models.Congresos, {
    foreignKey: 'IdCongreso'
})

sequelize.models.Inscripciones.hasOne(sequelize.models.Congresos, {
    foreignKey: 'IdCongreso'
})

sequelize.models.Inscripciones.hasOne(sequelize.models.Participantes, {
    foreignKey: 'IdParticipante'
})

try {
    await sequelize.sync()
}
catch (err){
    console.log({msg: err.message})
}

export default sequelize