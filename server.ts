import express, { Application } from 'express';


const app: Application = express();
const port: string = process.env.PORT || '5000';


app.listen( port, () => {
    console.log(`Servidor corriendo en puerto ` + port );
})


export default app;
