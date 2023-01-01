
function bttFunction() {
    alert("Nenhum Conteudo encontrado")
}

function executaAcao(){
    alert("Eu vou para o Google");
    window.location = "http://google.com";
}

function eventHeadfixed() {
    var cabecalho = document.querySelector('.spaceBacground');
    var cabecalhoEspaco = document.querySelector('.prymary');
    var cabecalhoOffset = cabecalho.offsetTop;
    
    function verificaCabecalho() {
        var scrollTop = window.scrollY;
        var cabecalhoAltura = cabecalho.offsetHeight;

        if(scrollTop >= cabecalhoOffset) {
            // rolagem da página passou do elemento, vamos fixá-lo
            cabecalho.classList.add('spaceBacgroundFixed');
            
            // ativa cabecalho-espaco para ocupar o espaço perdido
            cabecalhoEspaco.style.height = cabecalhoAltura + 'px';
        } else {
            // retira a classe adicional do elemento
            cabecalho.classList.remove('spaceBacgroundFixed');

            // retira a altura do cabecalho-espaco
            cabecalhoEspaco.style.height = 0;
        }
    }

    window.addEventListener('scroll', verificaCabecalho);
    window.addEventListener('resize', verificaCabecalho);
}

window.addEventListener("load", eventHeadfixed)