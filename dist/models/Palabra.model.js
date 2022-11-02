"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = require("../db/conexion");
const Palabra = conexion_1.db.define("Palabra", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        //unique: true
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING
    },
    video: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Palabra;
//# sourceMappingURL=Palabra.model.js.map