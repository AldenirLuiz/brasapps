
/*
var     :-> Declara uma variável, opcionalmente, inicializando-a com um valor.
let     :-> Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
const   :-> Declara uma constante de escopo de bloco, apenas de leitura.
*/


function goToPage(page) {
    if (page == "home") {
        window.location.replace(origin)
    }else{
        window.location.replace(origin+page);
    }
}

