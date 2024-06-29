import { DataTypes } from "sequelize";


const CongresoAttributes ={
    IdCongreso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    NombreCongreso:{
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
    DescripcionCongreso:{
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Descripcion es requerido",
          },
          len: {
            args: [5, 60],
            msg: "la descripcion debe ser tipo carateres, entre 5 y 200 de longitud",
          },

    }},
    FechaCongreso:{
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Fecha  es requerido",
          },
        },
    },
    IdTipoCongreso:{
        type: DataTypes.INTEGER

    },
    IdSala:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Fecha  es requerido",
          },
        },

    },
    IdPatrocinador:{
        type: DataTypes.INTEGER

    },
    IdOrador:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "Fecha  es requerido",
          },
        },

    }
    
}

const CongresoOptions = {
    timestamps: false
}

const CongresoModel = {
    CongresoAttributes,
    CongresoOptions
}

export default CongresoModel