import { listPokemon, getPokemonDetails, getPokemonSpecies, getChainEvolution, getEvolutionNames } from '../services/pokemonService.service.js';

//Funci+ón asincrónica para obtener la lista de pokemones y devolverla como respuesta
async function getPokemonListController(req, res) {
    const pokemonList = await listPokemon();
    res.json(pokemonList);
}

//Función asincrónica que obtiene los detalles de un pokemon por su id o nombre y devolverlo como respuesta
async function getPokemonDetailsController(req, res) {
    const { idOrName } = req.params;
    const pokemonDetails = await getPokemonDetails(idOrName);
    res.json(pokemonDetails);
}

//Función asincrónica que obtiene la especie de un pokemon por su id o nombre y devolverlo como respuesta
async function getPokemonSpeciesController(req, res) {
    const { idOrName } = req.params;
    const pokemonSpecies = await getPokemonSpecies(idOrName);
    res.json(pokemonSpecies);
}

//Función asincrónica que obtiene la cadena de evolución de un pokemon por su url y devolverla como respuesta
async function getChainEvolutionController(req, res) {
    const { url } = req.params;
    const chainEvolution = await getChainEvolution(url);
    res.json(chainEvolution);
}

//Función que obtiene los nombres de los pokemones en la cadena de evolución y devolverlos como respuesta
function getEvolutionNamesController(req, res) {
    const { chain } = req.body;
    const evolutionNames = getEvolutionNames(chain);
    res.json(evolutionNames);
}

//Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación
export { getPokemonListController, getPokemonDetailsController, getPokemonSpeciesController, getChainEvolutionController, getEvolutionNamesController };