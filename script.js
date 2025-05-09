// Elementos HTML
let $input = document.querySelector("#input")
let $pokemon_imagem = document.querySelector("#imagem_pokemon")
let $pokemon_nome = document.querySelector("#pokemon_nome")
let $form = document.querySelector("#submit_form")

async function fetchPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if(response.status === 200) {
        let pokemon_obj = await response.json()
        console.log(pokemon_obj)
        return pokemon_obj
    }
}

async function mostrarPokemon(pokemon) {
    let pokemon_dados = await fetchPokemon(pokemon)
    
    if(pokemon_dados){
        $pokemon_nome.innerText = pokemon_dados.name
    }
}

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    mostrarPokemon($input.value.toLowerCase())

})