import dotenv from 'dotenv';
dotenv.config();


import app from './server';
app.listen();

import bodyParser from 'body-parser'; // necesitamos instalar body-parser para los req.body
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

import allRoutes from './routes/index.routes';
app.use("/api", allRoutes);


import { conexionDB } from './db/conexion';
conexionDB();

