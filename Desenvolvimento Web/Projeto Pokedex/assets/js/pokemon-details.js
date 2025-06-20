function transformJsonInSection(pokemon) {
    const altura = pokemon.height / 10
    const peso = pokemon.weight / 10

    document.getElementById("detailsContent").innerHTML =
    `
    <header class="${pokemon.types[0].type.name}">

            <!-- Pokemon here -->
            
            
            <span class="number">${pokemon.id}</span>
            <span class="name">${pokemon.name}</span>
            <div class="types">
                <ol>
                    ${pokemon.types.map((type) => `<li class="type">${type.type.name}</li>`).join('')}
                </ol>
            </div>
            
    </header>

    <article class="${pokemon.types[0].type.name}">

        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="photo">

    </article>

    <footer>

            <div class="abilities">
                <h1>Abilities</h1>
                <div class="abilities-names">
                    <ol>
                        ${pokemon.abilities.map((ability) => `<li class="abilitie-name">${ability.ability.name}</li>`).join('')}
                    </ol>
                </div>
            </div>

            <div class="moves">   
                <h1>Moves</h1>
                <div class="moves-names">
                    <ol>
                        ${pokemon.moves.slice(0, 6).map((ability) => `<li class="move-name">${ability.move.name}</li>`).join('')}
                    </ol>
                </div>
            </div>
                <br>
            <div class="characteristics">
                <li class="height">Height: ${altura} m</li>
                <li class="weight">Weight: ${peso} kg</li>
            </div>
            

    </footer>
    
    `
}

function transformPokemonInDetails (pokemonNumber) {

    // URL da API para obter informações sobre Bulbasaur
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`;

    fetch(url)

        .then(response => response.json()) // Converte a resposta em JSON
        .then(pokemon => {transformJsonInSection(pokemon)})

    
}

function redirectToPokemonDetails (pokemonNumber) {

    window.location.href = `details.html?pokemon=${pokemonNumber}`;

}

