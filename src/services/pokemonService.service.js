//Función asincrónica para obtener la lista de pokemones
async function getPokemonList() {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//Función asincrónica para obtener los detalles de un pokemon por su nombre o id
async function getPokemonDetails(idOrName) {
    const url = `https://pokeapi.co/api/v2/pokemon/${idOrName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//Función asincrónica para obtener la especie de un pokemon por su nombre o id
async function getPokemonSpecies(idOrName) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${idOrName}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//Función asincrónica para obtener la cadena de evolución de cada pokemon
async function getChainEvolution(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}


//Obtiene los nombres de los pokemones en la cadena de evolución
function getEvolutionNames(chain) {
    const names = [];
    let current = chain.chain;

    names.push(current.species.name);

    while (current.evolves_to.length > 0) {
        current = current.evolves_to[0];
        names.push(current.species.name);
    }

    return names;
}

//Peticiones que junta las 3 peticiones anteriores y devuelve la información de cada pokemon
const listPokemon = async () => {
    const pokemonList = await getPokemonList();
    const pokemonSpeciesPromises = pokemonList.results.map(pok => getPokemonSpecies(pok.name));
    const pokemonSpecies = await Promise.all(pokemonSpeciesPromises);

    const uniqueChainUrls = Array.from(new Set(pokemonSpecies.map(s => s.evolution_chain.url)));

    const chainEvolutionPromises = uniqueChainUrls.map(url => getChainEvolution(url));
    const chainEvolutions = await Promise.all(chainEvolutionPromises);

    const groupPromises = chainEvolutions.map(async (chainEvolution) => {
        const evolutionNames = getEvolutionNames(chainEvolution);

        const detailsPromises = evolutionNames.map(name => getPokemonDetails(name));
        const details = await Promise.all(detailsPromises);

        const chainPokemons = details.map(detail => ({ detail}));

        return { chainPokemons };
    });

    return Promise.all(groupPromises);
} 

//Se exportan las funciones para ser usadas en controllers
export { listPokemon, getPokemonDetails, getPokemonSpecies, getChainEvolution, getEvolutionNames };