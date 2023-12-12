function ImageWhite() {
    var image = document.getElementById('bose1');
    image.src = "fimage/bose1 white.png";
    var image = document.getElementById('bose2');
    image.src = "fimage/bose2 white.png";
    var image = document.getElementById('bose3');
    image.src = "fimage/bose3 white.png";
}
function ImageBlack() {
    var image = document.getElementById('bose1');
    image.src = "fimage/bose1 black.png";
    var image = document.getElementById('bose2');
    image.src = "fimage/bose2 black.png";
    var image = document.getElementById('bose3');
    image.src = "fimage/bose3 black.png";
}
function checkout(){
    var b1 = document.getElementById('b1').value;
    var b2 = document.getElementById('b2').value;
    var b3 = document.getElementById('b3').value;
    var tot = document.getElementById('cost');
    if(b1 < 0 || b2 < 0 || b3 < 0 ){
        tot.innerText = "Oi dont be negative";
    }else{
        var cost = 290* b1+249* b2+244.95* b3;
        tot.innerText = "Your total cost is €" + cost;
    }
    



}