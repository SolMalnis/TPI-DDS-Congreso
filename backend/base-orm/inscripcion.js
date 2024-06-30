import { DataTypes } from "sequelize";

const InscripcionAttributes ={
    IdInscripcion:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    IdCongreso :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El id de congreso es requerido"
            }
        }
    },
    IdParticipante :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "El id de participante es requerido"
            }
        }
    },
    FechaInscripcion:{
        type: DataTypes.DATEONLY,
        allowNull:false,
        validate: {
            notEmpty: {
                args: true,
                msg: "La fecha es requerida"
            }
        }
    },
    EstadoInsripcion :{
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isIn: {
                args: [['Confirmada', 'En espera']],
                msg: "EstadoDeInscripcion debe ser 'preinscripcion', 'aceptado' o 'rechazado'"
            },
            notEmpty: {
                args: true,
                msg: "El estado de la inscipcion es necesario"
            }
        }
    }

}

const InscripcionOptions = {
    timestamps: false
}

const InscripcionModel = {
    InscripcionAttributes,
    InscripcionOptions
}

export default InscripcionModel