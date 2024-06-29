import { DataTypes } from "sequelize";

const PatrocinadorAttributes = {
    IDPatrocinador: {
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
                msg: "Descripcion es requerida"
            },
            len: {
                args: [1, 200],
                msg: "Descripcion debe tener entre 1 y 200 caracteres"
            }
        }
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
    Telefono: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                args: true,
                msg: "Telefono es requerido"
            },
            isInt: {
                args: true,
                msg: "Telefono debe ser un número entero"
            }
        }
    } 
};

const PatrocinadorOptions = {
    timestamps: false
};

const PatrocinadorModel = {
    PatrocinadorAttributes,
    PatrocinadorOptions
};

export default PatrocinadorModel;
