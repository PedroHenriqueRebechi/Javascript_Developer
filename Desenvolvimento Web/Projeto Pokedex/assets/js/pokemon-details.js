const detailsContent = document.getElementById('detailsContent')

function convertPokemonDetailsToSection (pokemon) {
    return `
    <header>

            <!-- Pokemon here -->
            
            <span class="number">${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            <div class="types">
                <ol>
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            </div>
            
        </header>
    
        <article>

            <img src="${pokemon.photo}" alt="">

        </article>

        <footer>

            <div class="abilities">
                <h1>Abilities</h1>
                <div class="abilities-names">
                    <ol>
                        ${pokemon.types.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
                    </ol>
                </div>
            </div>

            <div class="moves">   
                <h1>Moves</h1>
                <div class="moves-names">
                    <ol>
                        ${pokemon.types.map((move) => `<li class="type ${move}">${move}</li>`).join('')}
                    </ol>
                </div>
            </div>
                <br>
            <div class="characteristics">
                <li class="height">${pokemon.height}</li>
                <li class="weight">${pokemon.weight}</li>
            </div>
            

        </footer>
    
    `
}

function buildPage (pokemon) {
    const newHtml = pokemon.convertPokemonDetailsToSection
    detailsContent.innerHTML += newHtml
}

buildPage()
