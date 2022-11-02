import { Sequelize } from 'sequelize';

export const db = new Sequelize('signotech', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
})

export const conexionDB = async () => {
    try {
        await db.authenticate();
        console.log('Connected to MySQL! Database name: ' + db.getDatabaseName());
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }         
}

// export default conexionDB;