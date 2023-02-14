let itensMenu = document.querySelector('.itens-menu');
let contato = document.querySelector('.icones-contato')
let AbrirMenu = document.querySelector('.iconeAbrirMenu');
let body = document.querySelector('.body');


AbrirMenu.addEventListener('click', function(){

    itensMenu.classList.toggle("menuAberto");
    contato.classList.toggle("menuAberto")

})

function mostrarMenuScroll (){
    if (scrollY > 0){
        let menuNav = document.querySelector('.menu');
        menuNav.classList.add('.transarenciaMenu');    
    }else{
        menuNav.classList.remove('.transarenciaMenu');    
    }
}
