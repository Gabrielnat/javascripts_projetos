document.addEventListener('DOMContentLoaded' , () => {
    const entradaEmai = document.getElementById('email')
    const caixasugestao = document.getElementById('emailSuggestions')

    const dominios = ['gmail.com' , 'yahoo.com' , 'outlook.com']

entradaEmai.addEventListener('input' , (e) => {
        const valorEntrada = e.target.value
        if(valorEntrada.includes('@')){
            const dominioInserido = valorEntrada.split('@')[1]
            const sugestao= dominios.filter(dominio => dominio.startsWith(dominioInserido))

            caixasugestao.innerHTML = sugestao.map(dominio =>
            `<div class = "sugestao-item">
                ${valorEntrada.split('@')[0]}@${dominio}
            </div>`).join('')
            caixasugestao.style.display = "block"
        }else{
            caixasugestao.style.display = 'none'
        }
    })
    caixasugestao.addEventListener('click' , (e) => {
        if(e.target.classList.contains("sugestao-item")){
            entradaEmai.value = e.target.textContent
            caixasugestao.style.display = 'none'
        }
    })
})

async function BuscarEndereco() {
    //função assicrona que será chamada quando o campo cep perder o foco
let cep = document.getElementById('cep').value.replace(/\D/g,'')

//verifica se o cep contém exatos 8 digitos
if(cep.length !== 8){
alert("CEP INVALIDO!!")
return
}

try{
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

    if(!resposta.ok){
    alert("ERRO AO CONSULTAR")
    return
    }

    let endereco = await resposta.json()

    document.getElementById('endereco').value = `${endereco.logradouro},${endereco.bairro},${endereco.localidade},${endereco.uf}`


    }catch(erro){
    alert("ERRO ao buscar")
    }

}

//calcula idd 
function calculaIdade(){
    let dataNasc = new Date(document.getElementById('dataNascimento').value)
    if(isNaN(dataNasc.getTime())){
        document.getElementById('idade').textContent = "Valor Inválido!"
        return
    }
    let hoje = new Date()
    let idade = hoje.getFullYear() - dataNasc.getFullYear()
    let mes = hoje.getMonth() - dataNasc.getMonth()
    if(mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())){
        idade--
    }
    document.getElementById('idade').textContent = `Idade: ${idade} anos`
}

function validarcpf(){
    cpf = document.getElementById('cpf').value.replace(/[^\d]+/g,"")
    if(cpf.length !== 11){
        new bootstrap.Modal(document.getElementById('cpfInvalidoModal')).show()
        return
    }

    let soma = 0

    for(let i = 1; i <=9; i++){
        soma += parseInt(cpf.substring(i-1,i)) * (11-i)
    }

    let resto = (soma*10)%11
    if(resto === 10 || resto === 11) resto = 0

    if(resto !== parseInt(cpf.substring(9,10))){
        alert("Digite um cpf valido!")
        return false
    }

    soma = 0
    for(let i = 1; i <= 10; i++){
        soma += parseInt(cpf.substring(i-1,i)*(12 - i))
    }
    resto = (soma*10) % 11
    if(resto === 10 || resto === 11) resto = 0

    if(resto !== parseInt(cpf.substring(10,11))){
        alert("digite um cpf valido!")
        return false
    }
}