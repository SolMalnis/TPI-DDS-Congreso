import { DataTypes } from "sequelize";

const SalaAttributes = {
    Idsala :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoincrement: true
    },
    NombreSala :{
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
          },}
    },
    Capacidad :{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: "capacidad es requerido",
          },
        },
    }
}

const TipoEventoOptions = {
  timestamps: false
};

const SalaModel = {
  SalaAttributes,
  SalaOptions
};

export default SalaModel;