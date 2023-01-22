function queryPageLoad(idCard, idClic) {
    let target = document.getElementById(idCard);
    var pageIteligencia = '../pages/contato.html'
    let input = document.getElementById(idClic);
    target.innerHTML = `<div class='card backgroundCard'><object id='flowObject' type='text/html' data='${pageIteligencia}'></object></div>`;
}


/* Esta função adiciona uma pagina dentro de um objeto com id: "idCard"*/

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


/* Contador 

function ctck() {
    var sds = document.getElementById("dum");
    if(sds == null){
        alert("Esta utilizando un paquete gratuito. No esta autorizado para retirar la etiqueta.");
    }
    var sdss = document.getElementById("dumdiv");
    if(sdss == null){
        alert("Esta utilizando un paquete gratuito. No esta autorizado para retirar la etiqueta.");
    }
}

document.onload="ctck()";
function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1) {
        endstr = document.cookie.length;
        return unescape(document.cookie.substring(offset, endstr));
    }
}

function GetCookie (name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getCookieVal (j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function SetCookie (name, value) {
    var argv = SetCookie.arguments;
    var argc = SetCookie.arguments.length;
    var expires = (2 < argc) ? argv[2] : null;
    var path = (3 < argc) ? argv[3] : null;
    var domain = (4 < argc) ? argv[4] : null;
    var secure = (5 < argc) ? argv[5] : false;
    document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
}

function DisplayInfo(){
    var expdate = new Date();
    var visit;
    expdate.setTime(expdate.getTime()+(24 * 60 * 60 * 1000 * 365));
    if(!(visit = GetCookie("visit"))) visit = 0;
    visit ++ ;
    SetCookie("visit", visit, expdate, "/", null, false);
    document.write("Usted ha visitado esta pagina "+ visit + " veces"); 
}

document.onload=DisplayInfo();

*/


const home = window.location.href;
console.log(`dataPath: ${home}`)

function chefGourmet (cName, cData) {
    let homme = encodeURI(home);
    let val = encodeURI(cData);
    let cookies = document.cookie;
    console.log(`cookies: ${cookies}`)
    if (cName == "home") {
        document.cookie = `name=${cName} data=${homme};`;
        console.log(`if home: ${cookies.slice(cookies.indexOf("home"), cookies.length)}`);
    }else{
        document.cookie = `name='${cName}'; data='${cData}'`;
    }
}


function getGourmet (cName) {
    let name = `'${cName}='`;
    let cookies = document.cookie;
    if (cookies.indexOf(cName) == -1) {
        return false;
    }else{
        cookies = cookies.replace(searchValue=cookies.indexOf(name), replaceValue=cookies.length);
        console.log(`datalogElse: ${cookies}`)
        if (cookies.indexOf(';') != -1) {
            cookies = cookies.replace(searchValue=0, replaceValue=cookies.indexOf(';'));
        }
        cookies = cookies.split('=')[1];
        alert(cookies);
        return cookies;
    }
}
