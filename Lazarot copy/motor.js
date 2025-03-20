//Lista de Cartas com mnesagens
//vetor
const cartas =[
    {nome : "o carlinhos",mensagem:"vc viverá como o carlinhos por um dia"},
    {nome : "o homem da chuca",mensagem:"ama fazer uma chuca"},
    {nome : "o comedor de anjinho",mensagem:"vc gosta de veveco"},
    {nome : "o viado",mensagem:"você gosta de degustar uma jeba"},
    {nome : "o corno",mensagem:"você será corno para sempre"},
    {nome : "a sorte",mensagem:"vc viverá um milionario"},
    {nome : "o mago",mensagem:"você terá três desejos"},
    {nome : "o leiteiro",mensagem:"você gosta de tomar leite de macho"},
    {nome : "o lazaro",mensagem:"você será o chucaboy por um dia"},
    {nome : "de ladinho",mensagem:"o amigo a sua direita e viado"},
    {nome : "parabens",mensagem:"você ganhou um carro"},
    {nome : "o jack",mensagem:"você gosta de crianças"}

];

function girarCarta(){
    const carta = document.getElementById("carta")
    const verso = document.getElementById("verso")

    //Sorteia uma carta aleatoria
    const indice = Math.floor(Math.random() * cartas.length)
    const cartasorteada = cartas[indice]

    //atualiza o conteudo da carta
    
    

    //Gira a carta
    carta.classList.toggle("virada")

}

function obterInfoPokemon(){
    const inputPokemon = document.getElementById('pokemon')
    const nomeOuIdPokemon = inputPokemon.value.toLowerCase()

    if(!nomeOuIdPokemon){
        alert("Qual Pokemon você quer buscar ?")
        return
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuIdPokemon}`)
    .then(resposta =>{
        if(!resposta.ok){
            throw new console.error(resposta.status);
        }
        return resposta.json()
    })
    .then(pokemon =>{
        const habilidadesHtml = pokemon.moves.map(item =>`<span class="habilidade-badge">${item.move.name}</span>`).join('')

        const divInfoPokemon = document.getElementById('pokemon-info')
        verso.innerHTML = `<img src="${pokemon.sprites.front_default}">
        <h2>Nome: ${pokemon.name}</h2>
        <h3>N°${pokemon.id}</h3>
        <h3>Tipo ${pokemon.types.map(item => '' + item.type.name).toString()}</h3>
        <h3>Peso: ${pokemon.weight /10}KG</h3>
        <h3>Altura: ${pokemon.height /10}</h3>`
    })
    .catch(erro => {
        console.error(erro)
    })
}
