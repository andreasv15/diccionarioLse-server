import Palabra from '../models/Palabra.model';
import { NextFunction, Request, Response } from "express";

const router = require('express').Router();

//? GET "/api/palabras/" => Listado de todas las palabras
router.get("/", async ( req:Request, res: Response, next: NextFunction ) => {
    // res.json("Ruta api palabras");

    try {
        const listado = await Palabra.findAll();
        //console.log(listado);

        if (!listado) {
            res.status(404).json({ errorMessage: "No existe ninguna palabra." });
            return;
        }
        res.json( listado );

    } catch (error) {
        next(error);
    }
});


//? POST "/api/palabras/nueva" => Añadir nueva palabra
router.post("/nueva", async ( req:Request, res:Response, next:NextFunction ) => {

    const { nombre, descripcion, video } = req.body;
    // const { body } = req;
    // console.log("nombre", nombre, "Descripcion", descripcion, "video", video);

    if (!nombre || !descripcion || !video) {
        res.status(400).json({ errorMessage: "Ningún campo puede estar vacío." })
        return;
    }

    try {

        // findOrCreate devuelve el objeto que coincida con nombre, o lo inserta si no existe
        const palabra = await Palabra.findOrCreate({
            where: { nombre },
            defaults: { descripcion, video }
        })
        res.json({ palabra });


    } catch (error) {
        next(error);
    }

})


//? GET "/api/palabras/:id" => Detalle de una palabra
router.get("/:id", async (req:Request, res:Response, next:NextFunction) => {

    const { id } = req.params;

    try {
        const palabra = await Palabra.findByPk(id);
        
        if (!palabra) {
            res.status(404).json({ errorMessage: "La palabra no existe." });
            return;
        }
        res.json({ palabra });
        
    } catch (error) {
        next(error);
    }

})


//? PATCH "/api/palabras/:id" => Actualizar datos de una palabra
router.patch("/:id", async (req:Request, res:Response, next:NextFunction) => {

    const { id } = req.params;
    const { nombre, descripcion, video } = req.body;


    try {
        const palabra = await Palabra.findByPk(id);

        if (!palabra) {
            res.status(404).json({ errorMessage: "La palabra no existe." });
            return;
        }
        await palabra.update({nombre, descripcion, video});
        res.json({ palabra }); // palabra actualizada
        
    } catch (error) {
        next(error);
    }

})


//? DELETE "/api/palabras/:id" => Elimina una palabra
router.delete("/:id", async (req:Request, res:Response, next:NextFunction) => {

    const { id } = req.params;

    try {
        const palabra = await Palabra.findByPk(id);

        if (!palabra) {
            res.status(404).json({ errorMessage: "La palabra no existe." });
            return;
        }
        await palabra.destroy();
        res.json("La palabra ha sido borrada."); // palabra borrada
        
    } catch (error) {
        next(error);
    }

})


export default router;