
/*
var     :-> Declara uma variável, opcionalmente, inicializando-a com um valor.
let     :-> Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
const   :-> Declara uma constante de escopo de bloco, apenas de leitura.
*/



function queryPageLoad(idCard, idClic) {
    let target = document.getElementById(idCard);
    var pageIteligencia = '../pages/contato.html'
    console.log(target)
    let input = document.getElementById(idClic);
    target.innerHTML = `<div class='card backgroundCard'><object id='flowObject' type='text/html' data='${pageIteligencia}'></object></div>`;
}

function bttFunctionMore(section) {
    let paragraph = document.getElementById(section);
    let bttMin = document.getElementById("btnMin"+section);
    if (bttMin.textContent == "Mais") {
        alert("called plus")
        bttMin.textContent = "Menos"
        paragraph.classList.remove("hiddenText");
        paragraph.classList.add("visibleText");
    } else {
        alert("called minus")
        bttMin.textContent = "Mais"
        paragraph.classList.remove("visibleText");
        paragraph.classList.add("hiddenText");
    }
}

function executaAcao(){
    alert("Eu vou para o Google");
    window.location = "http://google.com";
}


