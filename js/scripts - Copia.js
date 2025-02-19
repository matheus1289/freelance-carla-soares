// js do menu
const botao = document.querySelector('#hambergeButton');
const menu = document.querySelector('.list-menu');


botao.addEventListener('click', function(){
    menu.classList.toggle('active');
});
menu.addEventListener('click', function(){
    menu.classList.remove('active');
    botao.classList.remove('ativar');
})
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('scroll',window.scrollY > 1)
})
window.addEventListener("scroll", function(){
    let setaSubir = document.querySelector('.whats')
    setaSubir.classList.toggle('ativar-whats' , window.scrollY > 150)
})
window.addEventListener("scroll", function(){
    let topoSubir = document.querySelector('.topo')
    topoSubir.classList.toggle('topo-ativo' , window.scrollY > 500)
})
// fim menu