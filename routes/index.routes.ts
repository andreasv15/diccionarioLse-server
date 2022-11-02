import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req:Request, res:Response) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
// const usuarios = require("./usuarios.routes.js");
import usuariosRoutes from './usuarios.routes'; 
router.use("/auth", usuariosRoutes);

import palabrasRoutes from './palabras.routes';
router.use("/palabras", palabrasRoutes);


export default router;
