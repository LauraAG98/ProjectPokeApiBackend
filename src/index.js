import express from 'express';
import cors from 'cors';

//Se inicializa express y se define el puerto
const app = express();
const PORT = process.env.PORT || 3000;

//Se usan los cors para permitir solicitudes desde cualquier origen
app.use(cors());

//Se agrega mensaje de confirmación de que el servidor está corriendo
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});