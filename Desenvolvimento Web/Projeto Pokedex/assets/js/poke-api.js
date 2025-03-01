const pokeApi = {}

pokeApi.getPokemons = (offset = 0, limit = 10) => {
    // Utilizando Fetch API
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    // Fetch retorna uma Promise/Processamento assincrono
    return fetch(url)
        .then((response) => response.json()) // Tente
        .then((jsonBody) => jsonBody.results)
}