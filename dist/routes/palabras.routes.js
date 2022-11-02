"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Palabra_model_1 = __importDefault(require("../models/Palabra.model"));
const router = require('express').Router();
//? GET "/api/palabras/" => Listado de todas las palabras
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.json("Ruta api palabras");
    try {
        const listado = yield Palabra_model_1.default.findAll();
        //console.log(listado);
        if (!listado) {
            res.status(404).json({ errorMessage: "No existe ninguna palabra." });
            return;
        }
        res.json(listado);
    }
    catch (error) {
        next(error);
    }
}));
//? POST "/api/palabras/nueva" => Añadir nueva palabra
router.post("/nueva", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, video } = req.body;
    // const { body } = req;
    // console.log("nombre", nombre, "Descripcion", descripcion, "video", video);
    if (!nombre || !descripcion || !video) {
        res.status(400).json({ errorMessage: "Ningún campo puede estar vacío." });
        return;
    }
    try {
        // findOrCreate devuelve el objeto que coincida con nombre, o lo inserta si no existe
        const palabra = yield Palabra_model_1.default.findOrCreate({
            where: { nombre },
            defaults: { descripcion, video }
        });
        res.json({ palabra });
    }
    catch (error) {
        next(error);
    }
}));
//? GET "/api/palabras/:id" => Detalle de una palabra
router.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const palabra = yield Palabra_model_1.default.findByPk(id);
        if (!palabra) {
            res.status(404).json({ errorMessage: "La palabra no existe." });
            return;
        }
        res.json({ palabra });
    }
    catch (error) {
        next(error);
    }
}));
//? PATCH "/api/palabras/:id" => Actualizar datos de una palabra
router.patch("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, descripcion, video } = req.body;
    try {
        const palabra = yield Palabra_model_1.default.findByPk(id);
        if (!palabra) {
            res.status(404).json({ errorMessage: "La palabra no existe." });
            return;
        }
        yield palabra.update({ nombre, descripcion, video });
        res.json({ palabra }); // palabra actualizada
    }
    catch (error) {
        next(error);
    }
}));
//? DELETE "/api/palabras/:id" => Elimina una palabra
router.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const palabra = yield Palabra_model_1.default.findByPk(id);
        if (!palabra) {
            res.status(404).json({ errorMessage: "La palabra no existe." });
            return;
        }
        yield palabra.destroy();
        res.json("La palabra ha sido borrada."); // palabra borrada
    }
    catch (error) {
        next(error);
    }
}));
exports.default = router;
//# sourceMappingURL=palabras.routes.js.map