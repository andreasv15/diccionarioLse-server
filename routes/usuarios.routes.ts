import { NextFunction, Request, Response } from "express";
import Usuario from "../models/User.model";
const router = require("express").Router();


//? "/api/auth/login" => Login del administrador
router.post("/login", async (req:Request, res:Response, next: NextFunction ) => {
    // res.json("Ruta api login")


    const { nombreUsuario, password } = req.body;
    // res.json( {nombreUsuario, password})

    if ( !nombreUsuario || !password ) {
        res.status(400).json({ errorMessage: "Ningún campo puede estar vacío." })
        return;
    }

    try {

        const userLogged = await Usuario.findByPk( nombreUsuario );

        //console.log("user pass info:", userLogged?.getDataValue('password'));
        if (userLogged === null) {
            res.status(404).json({ errorMessage: "El usuario no existe." });
            return;
        }

        // comprobamos que la contraseña es correcta
        const userPass = userLogged?.getDataValue('password');
        if (userPass !== password) {
            res.status(401).json({ errorMessage: "La contraseña no es correcta." });
            return;
        }

        res.json("Usuario correctamente logueado.");

        //! FALTA COMPROBAR LA CONTRASEÑA CON EL BCRYPTJS



        
    } catch (error) {
        next(error)
    }


    // const usuarios = await Usuario.findAll();

    // if (usuarios.length === 0) {
    //     res.json("No hay usuarios")
    // }
    
    // res.json( {usuarios} )

})


export default router;


