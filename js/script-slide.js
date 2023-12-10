var counter = 1;

document.getElementById('radio1').checked = true;
document.getElementById('yt-radio1').checked = true;

setInterval(() => {
    proxImg();
    
}, 5000)

function proxImg(){
    document.getElementById('radio'+counter).checked = false;
    document.getElementById('yt-radio'+counter).checked = false;
    counter ++;

    if (counter > 3){
        counter = 1
    }
    document.getElementById('radio'+counter).checked = true;
    document.getElementById('yt-radio'+counter).checked = true;
}
