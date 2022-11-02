import { DataTypes } from 'sequelize';
import { db } from '../db/conexion';

const Palabra = db.define("Palabra", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        //unique: true
    },
    descripcion: {
        type: DataTypes.STRING
    },
    video: {
        type: DataTypes.STRING
    }
})

export default Palabra;
