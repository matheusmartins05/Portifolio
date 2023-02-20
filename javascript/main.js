let itensMenu = document.querySelector('.itens-menu');
let contato = document.querySelector('.icones-contato')
let AbrirMenu = document.querySelector('.iconeAbrirMenu');
let body = document.querySelector('.body');


AbrirMenu.addEventListener('click', function(){

    itensMenu.classList.toggle("menuAberto");
    contato.classList.toggle("menuAberto")

})


//Efeito hover ao setar mouse no item "sobre"

let sobre = document.querySelector('#sobre');

sobre.onmouseover = () =>{
    let expandeCard = document.querySelector('.card');
    expandeCard.classList.add('testeCard');
}

sobre.onmouseleave = () =>{
    let expandeCard = document.querySelector('.card');
    expandeCard.classList.remove('testeCard');
}

// Fechar menu mobile ao tocar em um item

function fecharMenu (){
    itensMenu.classList.remove("menuAberto");
    contato.classList.remove("menuAberto")
}
