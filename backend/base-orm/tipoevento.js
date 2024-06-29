import { DataTypes } from "sequelize";

const TipoEventoAttributes = {
    IDTipoEvento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Nombre: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Nombre es requerido"
            },
            len: {
                args: [1, 60],
                msg: "Nombre debe tener entre 1 y 60 caracteres"
            }
        }
    },
    Descripcion: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Descripción es requerida"
            },
            len: {
                args: [1, 200],
                msg: "Descripción debe tener entre 1 y 200 caracteres"
            }
        }
    },
    Participantes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                args: true,
                msg: "Participantes debe ser un número entero"
            }
        }
    }
};

const TipoEventoOptions = {
    timestamps: false
};

const TipoEventoModel = {
    TipoEventoAttributes,
    TipoEventoOptions
};

export default TipoEventoModel;