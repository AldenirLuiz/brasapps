
/*
var     :-> Declara uma variável, opcionalmente, inicializando-a com um valor.
let     :-> Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
const   :-> Declara uma constante de escopo de bloco, apenas de leitura.
*/


function goToPage(page) {
    console.log(window.location.ancestorOrigins)
    if (page == "home") {
        window.location.replace("https://aldenirluiz.github.io/brasapps/")
    }else{
        window.location.replace(origin+page);
    }
}

