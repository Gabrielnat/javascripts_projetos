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
    verso.innerHTML = `<strong>${cartasorteada.nome}</strong>
    <br>
    ${cartasorteada.mensagem}`

    //Gira a carta
    carta.classList.toggle("virada")

}
