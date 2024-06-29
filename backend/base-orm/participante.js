import { DataTypes } from "sequelize";

const ParticipanteAttributes ={
    IdParticipante :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    NombreParticipante: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Nombre es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Nombre debe ser tipo carateres, entre 5 y 60 de longitud",
          },
    }},
    ApellidoParticipante :{
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Apellido es requerido",
          },
          len: {
            args: [5, 60],
            msg: "Apellido debe ser tipo carateres, entre 5 y 60 de longitud",
          },
    }

    },
    FechaNacimiento :{
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Fecha  es requerido",
          },
        },
    }
}


const ParticipanteOptions = {
    timestamps: false
}

const ParticipanteModel = {
    ParticipanteAttributes,
    ParticipanteOptions
}

export default ParticipanteModel