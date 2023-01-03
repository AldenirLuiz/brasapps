
function bttFunctionMore(section) {
    let paragraph = document.getElementById(section);
    let bttMin = document.getElementById("btnMin"+section);
    if (bttMin.textContent == "Mais") {
        bttMin.textContent = "Menos"
        paragraph.classList.remove("hiddenText");
        paragraph.classList.add("visibleText");
    } else {
        bttMin.textContent = "Mais"
        paragraph.classList.remove("visibleText");
        paragraph.classList.add("hiddenText");
    }
}


function executaAcao(){
    alert("Eu vou para o Google");
    window.location = "http://google.com";
}

