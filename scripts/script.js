
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



/* Script Contato */

const style = document.getElementById("primaryCss");
const style1 = document.getElementById("secondaryCss");


if (internet()) {
    addBanerGithub();
}else{
    console.log("Internet Dissabled")
}

function addBanerGithub () {
    let banner = document.getElementById("github-stats");
    let codeBanner = `<p dir="auto"><a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/1aabfa667e145f74b3241fb5d9f2e3e8cd7d0314337574f15585ec396a2e0dd5/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d416c64656e69724c75697a2673686f775f69636f6e733d74727565267468656d653d6461726b26636f756e745f707269766174653d74727565"><img src="https://camo.githubusercontent.com/1aabfa667e145f74b3241fb5d9f2e3e8cd7d0314337574f15585ec396a2e0dd5/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d416c64656e69724c75697a2673686f775f69636f6e733d74727565267468656d653d6461726b26636f756e745f707269766174653d74727565" alt="Aldenir GitHub stats" data-canonical-src="https://github-readme-stats.vercel.app/api?username=AldenirLuiz&amp;show_icons=true&amp;theme=dark&amp;count_private=true" style="max-width: 100%;"></a></p>`;
    banner.innerHTML = codeBanner;
}

let styleTypeLoader = window.setInterval(function () {
    var widthDevice = screen.width;
    if (widthDevice >= 640){
        console.log(widthDevice)
        style.setAttribute("href", "../css/style-contato.css");
        style1.setAttribute("href", ""); 
    }
    else{
        console.log(widthDevice)
        style1.setAttribute("href", "../css/style-contatoAlternative.css");
        style.setAttribute("href", "");
    }
},1000)

function internet () {
    return navigator.onLine;
}

/* Fim Script Contato */