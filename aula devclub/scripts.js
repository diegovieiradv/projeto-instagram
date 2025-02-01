let imagem = document.querySelector(".troca-imagem")

function trocaimagem(){

    if(imagem.style.opacity == 0){
    imagem.style.opacity = 1 
}

else {
    imagem.style.opacity = 0 
}

}
setInterval(trocaimagem, 3000)

