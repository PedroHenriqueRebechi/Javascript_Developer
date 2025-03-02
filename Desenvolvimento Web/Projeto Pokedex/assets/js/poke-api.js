const pokeApi = {}

function convertPokeApiDetailToPokemon (pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types =  pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types // Primeiro indice do array

    pokemon.types = types
    pokemon.types = type
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json()) // Converte para json
        .then((jsonBody) => jsonBody.results) // Filtra o json
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => {
            console.log(pokemonsDetails)
        })
}

