"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.json("All good in here");
});
// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
// const usuarios = require("./usuarios.routes.js");
const usuarios_routes_1 = __importDefault(require("./usuarios.routes"));
router.use("/auth", usuarios_routes_1.default);
const palabras_routes_1 = __importDefault(require("./palabras.routes"));
router.use("/palabras", palabras_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.routes.js.map