let lista=document.getElementById("listaPokemon")

function consultarPokemon(id,num) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response) {
        response.json()
        .then(function (pokemon) {
         crearPokemon(pokemon,num) 
        })
    })
        
}
      
function consultarPokemones() {
    let primerID=Math.round(Math.random()*750)
    let segundoID=Math.round(Math.random()*750)
    let tercerID=Math.round(Math.random()*750)
    let cuartoID=Math.round(Math.random()*750)
    let quintoID=Math.round(Math.random()*750)
    let sextoID=Math.round(Math.random()*750)
   

    consultarPokemon(primerID,1)
    consultarPokemon(segundoID,2)
    consultarPokemon(tercerID,3)
    consultarPokemon(cuartoID,4)
    consultarPokemon(quintoID,5)
    consultarPokemon(sextoID,6)
}

    function crearPokemon(pokemon,num) {

    let item=lista.querySelector(`#pokemon-${num}`)
    
    let imagen=item.getElementsByTagName("img")[0]
    imagen.setAttribute("src",pokemon.sprites.front_default)

    let nombre=item.getElementsByTagName("p")[0]
    nombre.textContent=pokemon.name     
    }
    


consultarPokemones()