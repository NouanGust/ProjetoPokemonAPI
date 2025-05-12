// Elementos HTML
let $input_form = document.getElementById("input_form")
let $input = document.getElementById("input")
let $pokemon_nome = document.getElementById("pokemon_nome")
let $pokemon_id = document.getElementById("pokemon_id")
let $pokemon_imagem = document.getElementById("imagem_pokemon")


// Função PegaPokemon -- Fetch
async function PegaPokemon(pokemon){
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    let response = await(fetch(URL))

    if(response.status === 200) {
        let pokemon_obj = await(response.json())
        console.log(pokemon_obj)
        console.log(pokemon_obj.sprites.front_default)
        return pokemon_obj
    }
}

// Função MostraPokemon -- Coloca os elementos no HTML
async function MostraPokemon(pokemon) {
    let pokemon_infos = await PegaPokemon(pokemon)

    if(pokemon_infos){
        $pokemon_nome.innerText = pokemon_infos.name
        $pokemon_id.innerText = pokemon_infos.id
        $pokemon_imagem.src = pokemon_infos.sprites.front_default
    }
}


// EventListener
$input_form.addEventListener('submit', (event) => {
    event.preventDefault()
    MostraPokemon($input.value.toLowerCase())
})










async function PrintPokemon(pokemon){
    let response = await(fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`))
    let pokemon_obj = await response.json()
    console.log(pokemon_obj)
    console.log(pokemon_obj.id)
    console.log(pokemon_obj.name)
}