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
const User_model_1 = __importDefault(require("../models/User.model"));
const router = require("express").Router();
//? "/api/auth/login" => Login del administrador
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // res.json("Ruta api login")
    const { nombreUsuario, password } = req.body;
    // res.json( {nombreUsuario, password})
    if (!nombreUsuario || !password) {
        res.status(400).json({ errorMessage: "Ningún campo puede estar vacío." });
        return;
    }
    try {
        const userLogged = yield User_model_1.default.findByPk(nombreUsuario);
        //console.log("user pass info:", userLogged?.getDataValue('password'));
        if (userLogged === null) {
            res.status(404).json({ errorMessage: "El usuario no existe." });
            return;
        }
        // comprobamos que la contraseña es correcta
        const userPass = userLogged === null || userLogged === void 0 ? void 0 : userLogged.getDataValue('password');
        if (userPass !== password) {
            res.status(401).json({ errorMessage: "La contraseña no es correcta." });
            return;
        }
        res.json("Usuario correctamente logueado.");
        //! FALTA COMPROBAR LA CONTRASEÑA CON EL BCRYPTJS
    }
    catch (error) {
        next(error);
    }
    // const usuarios = await Usuario.findAll();
    // if (usuarios.length === 0) {
    //     res.json("No hay usuarios")
    // }
    // res.json( {usuarios} )
}));
exports.default = router;
//# sourceMappingURL=usuarios.routes.js.map