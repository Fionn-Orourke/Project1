function ImageWhite() {
    var image = document.getElementById('sony1');
    image.src = "DPimage/sony1white2.png";
    var image = document.getElementById('sony2');
    image.src = "DPimage/sony2white2.png";
    var image = document.getElementById('sony3');
    image.src = "DPimage/sony3white2.png";
}
function ImageBlack() {
    var image = document.getElementById('sony1');
    image.src = "DPimage/sony1black2.png";
    var image = document.getElementById('sony2');
    image.src = "DPimage/sony2black2.png";
    var image = document.getElementById('sony3');
    image.src = "DPimage/sony3black2.png";
}
function checkout(){
    var b1 = document.getElementById('s1').value;
    var b2 = document.getElementById('s2').value;
    var b3 = document.getElementById('s3').value;
    var tot = document.getElementById('cost');
    if(s1 < 0 || s2 < 0 || s3 < 0 ){
        tot.innerText = "Error Please Try Again";
    }else{
        var cost = 230* s1+80* s2+ 330* s3;
        tot.innerText = "Your total cost is €" + cost;
    }
    



}