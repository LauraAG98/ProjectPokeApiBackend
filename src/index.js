import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

//Se carga el archivo .env
dotenv.config();

//Se inicializa express y se define el puerto
const app = express();
const PORT = process.env.PORT || 3000;

//Se usan los cors para permitir solicitudes desde cualquier origen
app.use(cors());

//Rutas para peticiones a la API


//Se agrega mensaje de confirmación de que el servidor está corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});