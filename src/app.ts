import express, { Application } from 'express';
import morgan from 'morgan';

// Routes (suponiendo que estén definidos en otro lugar)
import IndexRoutes from './routes/index.routes';
import PostRoutes from './routes/post.routes';
import db from './database'; // Suponiendo que esta es su conexión a la base de datos

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', process.env.PORT || 3000); // Usa la variable de entorno o el valor predeterminado es 3000
  }

  middlewares() {
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  routes(): void {
    this.app.use(IndexRoutes);
    this.app.use('/posts', PostRoutes);
  }

  listen(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port:', this.app.get('port'));
      // Conectarse a la base de datos después de iniciar el servidor (opcional)
      db.conectarBD();
    });
  }
}

const server = new Server();
server.listen();