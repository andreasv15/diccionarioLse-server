"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server_1 = __importDefault(require("./server"));
server_1.default.listen();
const body_parser_1 = __importDefault(require("body-parser")); // necesitamos instalar body-parser para los req.body
server_1.default.use(body_parser_1.default.json()); // for parsing application/json
server_1.default.use(body_parser_1.default.urlencoded({ extended: true }));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
server_1.default.use("/api", index_routes_1.default);
const conexion_1 = require("./db/conexion");
(0, conexion_1.conexionDB)();
//# sourceMappingURL=app.js.map