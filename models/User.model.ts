import { DataTypes } from 'sequelize';
import { db } from '../db/conexion';


const Usuario = db.define('Usuario', {
    nombreUsuario:  {
        primaryKey: true,
        type: DataTypes.STRING,
        // con este metodo get podemos extraer el nombre de usuario en el fichero de routes
        get() {
            const rawValue = this.getDataValue('nombreUsuario');
            console.log("rawvalue: ", rawValue);
          }
      
    },
    password: {
        type: DataTypes.STRING,
        // con este metodo get podemos extraer la contraseña en el fichero de routes
        get() {
            const rawValue = this.getDataValue('password');
          }
    }
});

export default Usuario;

