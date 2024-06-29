import { DataTypes } from "sequelize";
const OradorAttributes = {
    IDOrador: {
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
    Apellidos: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Apellidos son requeridos"
            },
            len: {
                args: [1, 60],
                msg: "Apellidos deben tener entre 1 y 60 caracteres"
            }
        }
    },
    Biografía: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "Email debe ser una dirección válida"
            },
            notEmpty: {
                args: true,
                msg: "Email es requerido"
            }
        }
    },
    Inscripciones: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
};

const OradorOptions = {
    timestamps: false
};

const OradorModel = {
    OradorAttributes,
    OradorOptions
};

export default OradorModel;
