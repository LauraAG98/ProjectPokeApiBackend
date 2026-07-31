import { getPokemonListController, getPokemonDetailsController, getPokemonSpeciesController, getChainEvolutionController } from '../controllers/pokemonController.controller.js';
import express from 'express';

//Se crea constante para manejar las rutas de la API
const router = express.Router();

//Ruta para obtener la lista de pokemones
router.get('/pokemon', getPokemonListController);

//Ruta para obtener los detalles de un pokemon por su id o nombre
router.get('/pokemon/:idOrName', getPokemonDetailsController);

//Ruta para obtener la especie de un pokemon por su id o nombre
router.get('/pokemon-species/:idOrName', getPokemonSpeciesController);

//Ruta para obtener la cadena de evolución de un pokemon por su url
router.post('/pokemon-evolution', getChainEvolutionController);

//Exporta las rutas para que puedan ser utilizadas en otras partes de la aplicación
export { router };