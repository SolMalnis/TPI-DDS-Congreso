import { DataTypes } from "sequelize";
const EvaluacionAttributes = {
    IdEvaluacion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    IdCongreso: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "IDEvento es requerido"
            }
        }
    },
    IdParticipante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "IDParticipante es requerido"
            }
        }
    },
    Puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Puntuacion es requerida"
            }
        }
    },
    Comentarios: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    Fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notNull: {
                args: true,
                msg: "Fecha es requerida"
            }
        }
    }
};

const EvaluacionOptions = {
    timestamps: false
};

const EvaluacionModel = {
    EvaluacionAttributes,
    EvaluacionOptions
};

export default EvaluacionModel;


