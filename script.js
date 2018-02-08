var colors = generaterandomcolors(6);
var square = document.querySelectorAll(".square");
var rgbcolor = colors[generaterandom()];
var rgbtext = document.querySelector("#rgb");
var midtext = document.querySelector("#midtext");
var headcolor = document.querySelector(".heading");
var newtextbutton = document.querySelector("#newtext");
var easybutton = document.querySelector("#easy");
var hardbutton = document.querySelector("#hard");

newtextbutton.addEventListener("click", function () {
    headcolor.style.backgroundColor = "steelblue";
    newtextbutton.textContent = "NEW COLORS";
    colors = generaterandomcolors(6);
    rgbcolor = colors[generaterandom()];
    rgbtext.textContent = rgbcolor;
    for (i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = colors[i];}
});

easybutton.addEventListener("click", function () {
    easybutton.classList.add("selected");
    hardbutton.classList.remove("selected");
});


hardbutton.addEventListener("click", function () {
    easybutton.classList.remove("selected");
    hardbutton.classList.add("selected");
});


rgbtext.textContent = rgbcolor;
var i;
for (i = 0; i < square.length; i++) {
    square[i].style.backgroundColor = colors[i];
    square[i].addEventListener("click", function () {
        var clickedcolor = this.style.backgroundColor;

        if (clickedcolor === rgbcolor) {
            newtextbutton.textContent = "TRY AGAIN??";
            midtext.textContent = " CORRECT ";
            headcolor.style.backgroundColor = rgbcolor;
            for (var k = 0; k < square.length; k++) {
                square[k].style.backgroundColor = rgbcolor;
            }
        } else {
            midtext.textContent = " TRY AGAIN ";
            this.style.backgroundColor = "#232323";
        }
    });
}

function generaterandom() {
    var randomno = Math.floor(Math.random() * 6);
    return randomno;
}


function generaterandomcolors(num) {
    var a, b, c;
    var arr = []
    for (var x = 0; x < num; x++) {
        a = Math.floor(Math.random() * 255);
        b = Math.floor(Math.random() * 255);
        c = Math.floor(Math.random() * 255);
        arr[x] = "rgb(" + a + ", " + b + ", " + c + ")";
    }
    return arr;
}
