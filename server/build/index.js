"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const router = express.Router()
const mysql_1 = __importDefault(require("mysql"));
const app = (0, express_1.default)();
const port = 3000;
const connection = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test',
});
connection.connect();
app.listen(port, () => console.log(`Server listening on ${port}!`));
