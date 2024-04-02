"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
// Routes (suponiendo que estén definidos en otro lugar)
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const post_routes_1 = __importDefault(require("./routes/post.routes"));
const database_1 = __importDefault(require("./database")); // Suponiendo que esta es su conexión a la base de datos
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.settings();
        this.middlewares();
        this.routes();
    }
    settings() {
        this.app.set('port', process.env.PORT || 3000); // Usa la variable de entorno o el valor predeterminado es 3000
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(index_routes_1.default);
        this.app.use('/posts', post_routes_1.default);
    }
    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port:', this.app.get('port'));
            // Conectarse a la base de datos después de iniciar el servidor (opcional)
            database_1.default.conectarBD();
        });
    }
}
const server = new Server();
server.listen();
//# sourceMappingURL=app.js.map