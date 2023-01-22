
/*
var     :-> Declara uma variável, opcionalmente, inicializando-a com um valor.
let     :-> Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
const   :-> Declara uma constante de escopo de bloco, apenas de leitura.
*/


function goToPage(page) {
    let hostName = window.location.origin
    if (hostName == "http://127.0.0.1:5500") {
        window.location.replace(page)
    }else{
        window.location.replace(`/brasapps${page}`);
    }
}

