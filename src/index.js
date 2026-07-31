import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/pokemonRoute.route.js';

//Se carga el archivo .env
dotenv.config();

//Se inicializa express
const app = express();

//Se usan los cors para permitir solicitudes desde cualquier origen
app.use(cors());

//Se usa express.json para poder recibir datos en formato JSON
app.use(express.json());

//Ruta para peticiones a la API
app.use('/api', router);

//Se define el puerto
const PORT = process.env.PORT || 3000;

//Se agrega mensaje de confirmación de que el servidor está corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});