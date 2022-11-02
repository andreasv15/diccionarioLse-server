"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = require("../db/conexion");
const Usuario = conexion_1.db.define('Usuario', {
    nombreUsuario: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING,
        // con este metodo get podemos extraer el nombre de usuario en el fichero de routes
        get() {
            const rawValue = this.getDataValue('nombreUsuario');
            console.log("rawvalue: ", rawValue);
        }
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        // con este metodo get podemos extraer la contraseña en el fichero de routes
        get() {
            const rawValue = this.getDataValue('password');
        }
    }
});
exports.default = Usuario;
//# sourceMappingURL=User.model.js.map