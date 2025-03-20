const novaImagem = chrome.runtime.getURL("img/imagem.png")

function substituirImagens(){
    const imagens = document.getElementsByTagName("img")
    for(const img of imagens){
        if(img.classList.contains("substituida")) continue

        const novaImg = new Image()
        novaImg.src = novaImagem
        novaImg.style.width = img.offsetWidth + "px"
        novaImg.style.height = img.offsetHeight + "px"
        novaImg.style.objectFit = "cover"
        novaImg.classList.add("substituida")

        img.parentNode.replaceChild(novaImg,img)
    }
}

function substituirFundos(){
    const elementosComFundo = document.querySelectorAll("*")
    for(const elemento of elementosComFundo){
        if(elemento.style.backgroundImage){
            elemento.style.backgroundImage = `url('${novaImagem})`
            elemento.style.backgroundSize = "cover"
        }
    }
}

function substituirVideos(){
    const videos = document.getElementsByTagName("videos")
    for(const videos of videos){
        const img = document.createElement("img")
        img.src = novaImagem
        img.style.width = videos.offsetWidth + "px"
        img.style.height = videos.offsetHeight + "px"
        img.style.objectFit = "cover"
        video.parentNode.replaceChild(img,video)
    }
}

function substituirIframe(){
    const iframes = document.getElementsByTagName("iframe")
    for(const iframe of iframes){
        const img = document.createElement("img")
        img.src = novaImagem
        img.style.width = iframe.offsetWidth + "px"
        img.style.height = iframe.offsetHeight + "px"
        img.style.objectFit = "cover"
        video.parentNode.replaceChild(img,iframe)
}

}

function substituirTodasMidias(){
    substituirImagens()
    substituirFundos()
    substituirIframe()
}

substituirTodasMidias()

let timeoutId

const observador = new MutationObserver((mutações)=>{
    clearTimeout(timeoutId)
    timeoutId = setTimeout(()=>{
        substituirTodasMidias()
    },100)
})

const config = {childlist:true, subtree:true}
observador.observe(document.body, config)